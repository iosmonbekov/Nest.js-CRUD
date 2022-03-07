import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo.dto';
import { TodosEntity } from "./todos.entity";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Request } from "express";

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllTodos(@Req() request: Request): Promise<TodosEntity[]> {
    const userId = Number(request.headers.userId);
    return this.todosService.getAllTodos(userId);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string): Promise<TodosEntity> {
    return this.todosService.getTodoById(Number(id));
  }

  @Post()
  createTodo(@Body() todoDto: TodoDto): Promise<TodosEntity> {
    return this.todosService.createTodo(todoDto);
  }

  @Put('/:id')
  editTodoById(@Param('id') id: string, @Body() todoDto: TodoDto): Promise<TodosEntity> {
    return this.todosService.editTodoById(Number(id), todoDto);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todosService.deleteTodoById(Number(id));
  }
}
