import { IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSalesPersonFunctionDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson associated with the function' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: 1, description: 'ID of the function' })
  @IsOptional()
  @IsNumber()
  function_id?: number;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the person is active' })
  @IsBoolean()
  active: boolean;
}
