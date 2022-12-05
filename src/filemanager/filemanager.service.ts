import { Injectable } from '@nestjs/common';
import * as fileAccess from 'fs';
import { FileException } from './exceptions/file.exception';

@Injectable()
export class FilemanagerService {

  create(name: string, content: string): string {

    const filePath = `resources/${name}.txt`;

    if (fileAccess.existsSync(filePath))
      throw new FileException(`File with the name ${name} already exists!`);

    fileAccess.writeFileSync(filePath, content);

    return name + '.txt';

  }

  findAll(): Array<string> {
      return fileAccess.readdirSync('resources');
  }

  findOne(filename: string): string {
    const filePath = `resources/${filename}.txt`;

    if (!fileAccess.existsSync(filePath))
      throw new FileException(`File with the name ${filename} doesn't exists!`);

    return fileAccess.readFileSync(filePath, 'utf8');
  }

  update(filename: string, content: string) {
    const filePath = `resources/${filename}.txt`;

    fileAccess.writeFileSync(filePath, content);

    return filename + '.txt';
  }

  remove(filename: string): void {
    const filePath = `resources/${filename}.txt`;

    if (!fileAccess.existsSync(filePath))
      throw new FileException(`File with the name ${filename} doesn't exists!`);

    fileAccess.unlinkSync(filePath);
  }
}
