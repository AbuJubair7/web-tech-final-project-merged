import { IsDateString, IsIn, IsNotEmpty, IsString, Validate } from "class-validator";

export class CreateRecipientsManagementDto {
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    name: string;
    
}
