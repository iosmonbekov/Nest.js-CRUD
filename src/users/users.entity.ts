import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TodosEntity } from "../todos/todos.entity";

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TodosEntity, todo => todo.user)
  todos: TodosEntity[];
}
