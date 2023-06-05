import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  create(project: CreateProjectInput) {
    let proj = this.projectRepository.create(project)
    return this.projectRepository.save(proj)
  }

  async findAll() : Promise<Project[]>{
    return this.projectRepository.find()
  }

  async findOne(id: string): Promise<Project>{
    return this.projectRepository.findOne(id)
  }

  update(id:string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
