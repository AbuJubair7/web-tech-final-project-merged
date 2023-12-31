import { Module } from '@nestjs/common';
import { TaskManagementService } from './task-management.service';
import { TaskManagementController } from './task-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskManagement } from './entities/task-management.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TaskManagement])],
  controllers: [TaskManagementController],
  providers: [TaskManagementService],
})
export class TaskManagementModule {}
