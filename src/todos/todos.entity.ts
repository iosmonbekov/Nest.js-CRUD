import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "../users/users.entity";

@Entity()
export class TodosEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  state: boolean;

  @ManyToOne(() => UsersEntity, user => user.todos)
  user: UsersEntity;
}
