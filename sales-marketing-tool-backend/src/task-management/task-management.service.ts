import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskManagementDto } from './dto/create-task-management.dto';
import { UpdateTaskManagementDto } from './dto/update-task-management.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskManagement } from './entities/task-management.entity';
import { Repository, Entity } from 'typeorm';

@Injectable()
export class TaskManagementService {
  constructor(
    @InjectRepository(TaskManagement)
    private taskRepository: Repository<TaskManagement>
  ){}

  async create(createTaskManagementDto: CreateTaskManagementDto) {
    const data = await this.taskRepository.create(createTaskManagementDto); 
    return this.taskRepository.save(data);
  }

  findAll() {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<TaskManagement | undefined> {
    const data = await this.taskRepository.findOne({where: {id: id}});

    // console.log(data);
    
    if (data === null) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return data;
  }

  async update(id: number, task: Partial<TaskManagement>): Promise<TaskManagement> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOne({ where: { id } });
  }
  
  // async update(id: number, updateTaskManagementDto: UpdateTaskManagementDto) {
  //   const entityToUpdate = await this.taskRepository.findOne({where: {id: id}});
  //   if(entityToUpdate === null)
  //   {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   }

  //   this.taskRepository.merge(entityToUpdate,updateTaskManagementDto);
  //   return await this.taskRepository.save(entityToUpdate);
  // }

  async remove(id: number) {
    const taskToRemove = await this.taskRepository.findOne({where: {id: id}});
    if (!taskToRemove) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    } 
    return await this.taskRepository.remove(taskToRemove);
  }

  // async findByPriority(priority: string): Promise<TaskManagement[]> {
  //   const tasks = await this.taskRepository.find({ where: { priority: priority } });

  //   if (!tasks.length) {
  //     throw new NotFoundException(`No tasks found with priority: ${priority}`);
  //   }

  //   return tasks;
  // }
}
