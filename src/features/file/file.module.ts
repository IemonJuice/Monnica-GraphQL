import { Module } from '@nestjs/common';
import { FileService } from './services/file/file.service';
import { FileController } from './controllers/file/file.controller';
import {UsersModule} from "../users/users.module";

@Module({
  providers: [FileService],
  imports:[UsersModule],
  controllers: [FileController]
})
export class FileModule {}
