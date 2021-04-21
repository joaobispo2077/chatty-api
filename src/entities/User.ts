import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

import {  v4 as uuid } from 'uuid';

@Entity("settings")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) this.id = uuid();
  }
}

export { User };