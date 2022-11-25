import { Injectable } from '@nestjs/common';
import { CreateFilemanagerDto } from './dto/create-filemanager.dto';
import { UpdateFilemanagerDto } from './dto/update-filemanager.dto';
import * as fileAccess from 'fs';
import { FileException } from './exceptions/file.exception';

@Injectable()
export class FilemanagerService {
  
  create(name: string, content:string): string {
    
    const filePath = `resources/${name}.txt`;

    if(fileAccess.existsSync(filePath))
      throw new FileException(`File with the name ${name} already exists!`);

    fileAccess.writeFileSync(filePath, content);

    return name+'.txt';

  }

  findAll() {
    return `This action returns all filemanager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filemanager`;
  }

  update(filename: string, content: string) {
    const filePath = `resources/${filename}.txt`;

    fileAccess.writeFileSync(filePath, content);

    return filename+'.txt';
  }

  remove(id: number) {
    return `This action removes a #${id} filemanager`;
  }
}
