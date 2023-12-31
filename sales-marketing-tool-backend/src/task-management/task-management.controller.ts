import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { TaskManagementService } from './task-management.service';
import { CreateTaskManagementDto } from './dto/create-task-management.dto';
import { UpdateTaskManagementDto } from './dto/update-task-management.dto';

@Controller('task-management')
export class TaskManagementController {
  constructor(private readonly taskManagementService: TaskManagementService) {}

  @Post()
  create(@Body() createTaskManagementDto: CreateTaskManagementDto) {
    return this.taskManagementService.create(createTaskManagementDto);
  }

  @Get()
  findAll() {
    return this.taskManagementService.findAll();
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let data = this.taskManagementService.findOne(+id);
    return data;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskManagementDto: UpdateTaskManagementDto) {
    return this.taskManagementService.update(+id, updateTaskManagementDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.taskManagementService.remove(+id);
      return { message: `Task with ID ${id} has been successfully deleted` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      throw error;
    }
  }

  // @Get('priority/:priority')
  // async findByPriority(@Param('priority') priority: string) {
  //   try {
  //     const tasks = await this.taskManagementService.findByPriority(priority);
  //     return { tasks };
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       throw new NotFoundException(error.message);
  //     }
  //     throw error;  
  //   } 
  // }
}
