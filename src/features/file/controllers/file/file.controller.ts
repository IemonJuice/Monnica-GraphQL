import {Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {extname, join} from 'path';
import {response, Response} from 'express';
import {FileService} from "../../services/file/file.service";

@Controller('file')
export class FileController {

    constructor(private fileService: FileService) {
    }

    @Post('upload-photo')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const name = file.originalname.split('.')[0];
                const fileExtension = file.originalname.split('.')[1];
                const newFileName = name.split(" ").join("_") + "_" + Date.now() + '.' + fileExtension;
                callback(null, newFileName);
            }
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)/)) {
                return callback(null, false);
            }
            callback(null, true);
        }
    }))
    async loadPhoto(@UploadedFile() file: Express.Multer.File, @Body() body, @Res() res: Response) {
        await this.fileService.loadAvatarOfUser(file.filename, body.userId)
        res.sendFile(this.fileService.getUserImage(file.filename));
    }


    @Get(':imageName')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                callback(null, `${randomName}${extname(file.originalname)}`);
            },
        }),
    }))
    async getImage(@Param('imageName') imageName: string, @Res() res: Response) {
        res.sendFile(this.fileService.getUserImage(imageName));
    }
}
