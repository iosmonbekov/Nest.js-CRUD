import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';

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
}
