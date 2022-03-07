import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from './todos.entity';
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [TypeOrmModule.forFeature([TodosEntity]), AuthModule],
})
export class TodosModule {}
