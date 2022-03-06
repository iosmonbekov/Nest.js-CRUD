import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from './todos/todos.entity';
import { UsersModule } from './users/users.module';
import { UsersEntity } from "./users/users.entity";
import { AuthModule } from './auth/auth.module';

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
      entities: [TodosEntity, UsersEntity],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
