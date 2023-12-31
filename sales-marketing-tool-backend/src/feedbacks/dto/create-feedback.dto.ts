import { IsDateString, IsIn, IsNotEmpty, IsNumber, IsString, Validate } from "class-validator";

export class CreateFeedbackDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsNotEmpty()
    @IsString()
    date: string;
    
}
