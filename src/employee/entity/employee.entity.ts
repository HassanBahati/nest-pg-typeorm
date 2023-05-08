import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field()
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field({nullable: true})
  city: string;
}
