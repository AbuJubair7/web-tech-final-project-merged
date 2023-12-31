import { IsNotEmpty, IsString } from "class-validator";

export class CreateCampaignDto {


    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    desc: string;
    
    @IsNotEmpty()
    @IsString()
    mailTemplateId: string;

    @IsNotEmpty()
    @IsString()
    recipientListId: string;

    @IsNotEmpty()
    @IsString()
    date: string;

}
