import { Resolver, Query } from '@nestjs/graphql';
import { Employee } from './entity/employee.entity';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeservice: EmployeeService) {}

  @Query(() => Employee, { name: 'getAllEmployees' })
  findAll() {
    return this.employeeservice.findAll();
  }
}
