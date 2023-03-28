import {
  Body,
  Controller,
  Get,
  Param,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { getFileType } from './utils/helper';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  getFile(
    @Res({ passthrough: true }) res: Response, 
    @Param('name') name?: string
  ): StreamableFile {
    const file = createReadStream(`./${name}`);
    const type = getFileType(name)
    res.set({
      'Content-Type': type,
    });
    return new StreamableFile(file);
  }
}
