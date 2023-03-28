import { StreamableFile } from '@nestjs/common';
import type { Response } from 'express';
export declare class FilesController {
    getPath(name: string): string;
    getFile(res: Response, name?: string): StreamableFile;
}
