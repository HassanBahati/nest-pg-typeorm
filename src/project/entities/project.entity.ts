import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Field()
  @Column()
  name: String

  @Field(() => Int)
  @Column()
  code: number;
}
