import { Resolver, Query } from '@nestjs/graphql';
import { Employee } from './entity/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  @Query(() => Employee)
  findAll(){}
}
