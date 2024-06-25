import { IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalesPersonFunctionDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson associated with the function' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: 1, description: 'ID of the function' })
  @IsNumber()
  function_id: number;

  @ApiProperty({ example: true, description: 'Indicates if the person is active' })
  @IsBoolean()
  active: boolean;
}
