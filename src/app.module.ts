import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from './todos/todos.entity';

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'todo-app',
      entities: [TodosEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
