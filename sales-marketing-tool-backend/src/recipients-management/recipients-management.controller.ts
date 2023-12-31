import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { RecipientsManagementService } from './recipients-management.service';
import { CreateRecipientsManagementDto } from './dto/create-recipients-management.dto';
import { UpdateRecipientsManagementDto } from './dto/update-recipients-management.dto';

@Controller('recipients-management')
export class RecipientsManagementController {
  constructor(private readonly recipientsManagementService: RecipientsManagementService) {}

  @Post()
  create(@Body() createRecipientsManagementDto: CreateRecipientsManagementDto) {
    console.log(createRecipientsManagementDto);
    
    return this.recipientsManagementService.create(createRecipientsManagementDto);
  }

  @Get()
  findAll() {
    return this.recipientsManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let data = this.recipientsManagementService.findOne(+id);
    return data;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipientsManagementDto: UpdateRecipientsManagementDto) {
    
    return this.recipientsManagementService.update(+id, updateRecipientsManagementDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.recipientsManagementService.remove(+id);
      return { message: `Recipient with ID ${id} has been successfully deleted` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Recipient with ID ${id} not found`);
      }
      throw error;
    }
  }

  @Get('category/:category')
  async findByCategory(@Param('category') category: string) {
    try {
      const data = await this.recipientsManagementService.findByCategory(category);
      return { data };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;  
    } 
  }
}
