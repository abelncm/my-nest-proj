import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskManagerDto } from './create-task-manager.dto';

export class UpdateTaskManagerDto extends PartialType(CreateTaskManagerDto) {}
