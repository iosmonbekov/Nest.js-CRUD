import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo.dto';
import { TodosEntity } from "./todos.entity";

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodos(): Promise<TodosEntity[]> {
    return this.todosService.getAllTodos();
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
