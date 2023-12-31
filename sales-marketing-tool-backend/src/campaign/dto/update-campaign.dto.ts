import { PartialType } from '@nestjs/mapped-types';
import { CreateCampaignDto } from './create-campaign.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCampaignDto 
{

    @IsOptional() @IsNotEmpty() @IsString()
    name?: string;
    
    @IsOptional() @IsNotEmpty() @IsString()
    desc?: string;
    
    @IsOptional() @IsNotEmpty() @IsString()
    mailTemplateId?: string;

    @IsOptional() @IsNotEmpty() @IsString()
    recipientListId?: string;

    @IsOptional() @IsNotEmpty() @IsString()
    date?: string;
}
