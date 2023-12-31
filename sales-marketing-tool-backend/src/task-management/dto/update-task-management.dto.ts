import { IsIn, IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator';
import { IsCustomDateFormatConstraint } from '../validators/custom-date.validator';

export class UpdateTaskManagementDto  {

    @IsOptional() @IsNotEmpty() @IsString()
    name?: string;

    @IsOptional() @IsNotEmpty() @IsString()
    description?: string;
    
    // @IsOptional() @IsNotEmpty() @IsString()
    // @Validate(IsCustomDateFormatConstraint)
    // dueDate?: string;

    // @IsOptional() @IsNotEmpty() @IsString()
    // @IsIn(['High', 'Medium', 'Low'], { message: 'Priority must be "High", "Medium", or "Low"' })
    // priority: string;
    
} 
