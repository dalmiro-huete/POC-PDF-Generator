import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
