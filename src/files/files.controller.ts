import {
  Controller,
  Get,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import { getFileType } from './utils/helper';
import { Query } from '@nestjs/common/decorators';

@Controller('files')
export class FilesController {
  getPath(name: string) {
    return join(process.cwd(), 'src/files/assets', name)
  }

  @Get()
  getFile(
    @Res({ passthrough: true }) res: Response, 
    @Query('name') name?: string
  ): StreamableFile {
    const file = createReadStream(this.getPath(name));
    console.log('file', file)
    console.log('name', name)
    const type = getFileType(name)
    console.log('type', type)
    res.set({
      'Content-Type': type,
    });
    return new StreamableFile(file);
  }
}
