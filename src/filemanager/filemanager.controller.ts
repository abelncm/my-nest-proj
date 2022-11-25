import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilemanagerService } from './filemanager.service';
import { CreateFilemanagerDto } from './dto/create-filemanager.dto';
import { UpdateFilemanagerDto } from './dto/update-filemanager.dto';
import { ApiResponse } from 'src/common/response/response.model';

@Controller('files')
export class FilemanagerController {
  constructor(private readonly filemanagerService: FilemanagerService) {}

  @Post()
  create(@Body() createFilemanagerDto: CreateFilemanagerDto): ApiResponse  {
    const fileName = this.filemanagerService.create(createFilemanagerDto.name, createFilemanagerDto.content);
    return new ApiResponse(`File ${fileName} created successfully!`);
  }

  @Get()
  findAll() {
    return this.filemanagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filemanagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilemanagerDto: UpdateFilemanagerDto) {
    return this.filemanagerService.update(+id, updateFilemanagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filemanagerService.remove(+id);
  }
}
