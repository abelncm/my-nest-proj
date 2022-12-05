import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './person/person.module';
import { FilemanagerModule } from './filemanager/filemanager.module';
import { TaskManagerModule } from './task-manager/task-manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'nemo',
      database: 'tasks',
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
    PersonsModule,
    FilemanagerModule, 
    TaskManagerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
