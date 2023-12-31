import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignService {

  constructor(
    @InjectRepository(Campaign)
    private repository: Repository<Campaign>
  ){}

  async create(createCampaignDto: CreateCampaignDto) {
    const data = await this.repository.create(createCampaignDto); 
    return this.repository.save(data);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Campaign | undefined> {
    const data = await this.repository.findOne({where: {id: id}});
    
    if (data === null) {
      throw new NotFoundException(`Recipient with ID ${id} not found`);
    }
    return data;
  }


  async update(id: number, updateCampaignCreationDto: UpdateCampaignDto) {
    const entityToUpdate = await this.repository.findOne({where: {id: id}});
    if(entityToUpdate === null)
    {
      throw new NotFoundException(`Recipient with ID ${id} not found`);
    }
    this.repository.merge(entityToUpdate,updateCampaignCreationDto);
    return await this.repository.save(entityToUpdate);

  }
  
  async remove(id: number) {
    const taskToRemove = await this.repository.findOne({where: {id: id}});
    if (!taskToRemove) {
      throw new NotFoundException(`Recipient with ID ${id} not found`);
    } 
    return await this.repository.remove(taskToRemove);
  }
}
