import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'employee' })
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  // @PrimaryColumn() - to set it manually
  id: string;

  @Field()
  @Column()
  first_name: string;

  @Field()
  @Column()
  last_name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;
}
