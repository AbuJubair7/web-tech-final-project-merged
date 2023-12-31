import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipientsManagementDto } from './dto/create-recipients-management.dto';
import { UpdateRecipientsManagementDto } from './dto/update-recipients-management.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipientsManagement } from './entities/recipients-management.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class RecipientsManagementService {

  constructor(
    @InjectRepository(RecipientsManagement)
    private repository: Repository<RecipientsManagement>
  ){}

  async create(createRecipientsManagementDto: CreateRecipientsManagementDto) {

    

    const data = await this.repository.create(createRecipientsManagementDto); 
    return this.repository.save(data);
  }
  
  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RecipientsManagement | undefined> {
    const data = await this.repository.findOne({where: {id: id}});
    
    if (data === null) {
      throw new NotFoundException(`Recipient with ID ${id} not found`);
    }
    return data;
  }


  async update(id: number, updateRecipientsManagementDto: UpdateRecipientsManagementDto) {
    const entityToUpdate = await this.repository.findOne({where: {id: id}});
    if(entityToUpdate === null)
    {
      throw new NotFoundException(`Recipient with ID ${id} not found`);
    }

    this.repository.merge(entityToUpdate,updateRecipientsManagementDto);
    return await this.repository.save(entityToUpdate);

  }

  
  async remove(id: number) {
    const taskToRemove = await this.repository.findOne({where: {id: id}});
    if (!taskToRemove) {
      throw new NotFoundException(`Recipient with ID ${id} not found`);
    } 
    return await this.repository.remove(taskToRemove);
  }

  async findByCategory(category: string): Promise<RecipientsManagement[]> {
    const tasks = await this.repository.find({ where: { category: Like(`%${category}%`)} });

    if (!tasks.length) {
      throw new NotFoundException(`No category found with category name: ${category}`);
    }

    return tasks;
  }

}
