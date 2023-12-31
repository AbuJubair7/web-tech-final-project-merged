import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateRecipientsManagementDto{
    @IsOptional() @IsNotEmpty() @IsString()
    email?: string;
    
    @IsOptional() @IsNotEmpty() @IsString()
    category?: string;

    @IsOptional() @IsNotEmpty() @IsString()
    name?: string;
}
