// custom-date.validator.ts
import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'isCustomDateFormat', async: false })
  export class IsCustomDateFormatConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
      if (typeof value !== 'string') {
        return false;
      }
  
      //  "15-Nov-23" format
      const regex = /^(0?[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{2}$/;
      return regex.test(value);
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'The date must be in the format "15-Nov-23".';
    }
  }
  