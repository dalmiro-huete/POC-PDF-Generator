import {Controller, Post, Get, Header, Res} from '@nestjs/common';
import { FileService } from './file.service';

@Controller('api/pdf-file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get('/generate')
  @Header('content-type', "application/pdf")
  generateFile(@Res() response) {
    return this.fileService.generateFile(response);
  }
}
