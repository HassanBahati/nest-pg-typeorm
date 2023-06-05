import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: String

  @Field(() => Int)
  code: number;
}
