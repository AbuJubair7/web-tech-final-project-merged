import { Module } from '@nestjs/common';
import { RecipientsManagementService } from './recipients-management.service';
import { RecipientsManagementController } from './recipients-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipientsManagement } from './entities/recipients-management.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecipientsManagement])],
  controllers: [RecipientsManagementController],
  providers: [RecipientsManagementService],
})
export class RecipientsManagementModule {}
