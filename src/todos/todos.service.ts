import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodosEntity } from './todos.entity';
import { Repository } from 'typeorm';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private todoRepository: Repository<TodosEntity>,
  ) {}

  getAllTodos(): Promise<TodosEntity[]> {
    return this.todoRepository.find();
  }

  createTodo(todoDto: TodoDto): Promise<TodosEntity> {
    const newTodo = this.todoRepository.create(todoDto);
    return this.todoRepository.save(newTodo);
  }

  getTodoById(id: number): Promise<TodosEntity> {
    return this.todoRepository.findOne(id);
  }

  async editTodoById(id: number, body: TodoDto): Promise<TodosEntity> {
    const todo = await this.getTodoById(id);
    const editedTodo = {...todo, ...body};
    return this.todoRepository.save(editedTodo);
  }

  async deleteTodoById(id: number): Promise<TodosEntity> {
    const todo = await this.getTodoById(id);
    return this.todoRepository.remove(todo);
  }
}
