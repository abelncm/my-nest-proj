import { Injectable } from '@nestjs/common';
import { CreateFilemanagerDto } from './dto/create-filemanager.dto';
import { UpdateFilemanagerDto } from './dto/update-filemanager.dto';
import * as fileAccess from 'fs';

@Injectable()
export class FilemanagerService {
  
  create(name: string): string {
    
    const filePath = `resources/${name}.txt`;
    const content = 'Sextou!!';

    fileAccess.writeFileSync(filePath, content);

    return name+'.txt';

  }

  findAll() {
    return `This action returns all filemanager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filemanager`;
  }

  update(id: number, updateFilemanagerDto: UpdateFilemanagerDto) {
    return `This action updates a #${id} filemanager`;
  }

  remove(id: number) {
    return `This action removes a #${id} filemanager`;
  }
}
