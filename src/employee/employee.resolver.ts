import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Employee } from './entity/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInput') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }
}
