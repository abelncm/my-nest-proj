import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { FilemanagerModule } from './filemanager/filemanager.module';
import { PersonsModule } from './person/person.module';
import { TaskManagerModule } from './task-manager/task-manager.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'nemo',
      database: 'nest_tasks',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
    // AutomapperModule.forRoot({
    //   strategyInitializer: classes(),
    // }),
    FilemanagerModule,
    TaskManagerModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
