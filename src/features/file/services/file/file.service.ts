import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../../../users/services/users/users.service";
import {join} from "path";
import e from "express";


@Injectable()
export class FileService {
    constructor(private usersService: UsersService) {
    }

    async loadAvatarOfUser(fileName: string, userId: number) {
        const user = await this.usersService.getUserById(userId);
        if (!user) {
            throw new UnauthorizedException('user not found');
        }
        user.avatarImageName = fileName;
        await this.usersService.changeUserInfo(user)
        return user;
    }

    getUserImage(imageName: string) {
        const fileNameWithoutExtension = imageName.split('.')[0];
        const extension = imageName.split('.')[1];
        const filePath = join(process.cwd(), 'uploads', `${fileNameWithoutExtension}.${extension}`);
        return filePath
    }
}
