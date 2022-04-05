import { Injectable } from '@nestjs/common';
import * as PdfPrinter from 'pdfmake';
import {DOC_DEFINITION, FILE_FONTS} from "./utils/constants";


@Injectable()
export class FileService {
  generateFile(response) {
    const printer = new PdfPrinter(FILE_FONTS);
    const pdfDoc = printer.createPdfKitDocument(DOC_DEFINITION, {});
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
