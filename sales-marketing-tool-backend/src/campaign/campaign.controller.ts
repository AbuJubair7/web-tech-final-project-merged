import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(@Body() createCampaignDto: CreateCampaignDto) {
    console.log(createCampaignDto);
    
    return this.campaignService.create(createCampaignDto);
  }

  @Get()
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let data = this.campaignService.findOne(+id);
    return data;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaignDto: UpdateCampaignDto) {
    
    return this.campaignService.update(+id, updateCampaignDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.campaignService.remove(+id);
      return { message: `Recipient with ID ${id} has been successfully deleted` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Recipient with ID ${id} not found`);
      }
      throw error;
    }
  }

}
