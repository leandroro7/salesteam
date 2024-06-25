import { IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateHierarchicalRelationshipDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson in the relationship' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: 2, description: 'ID of the supervisor' })
  @IsOptional()
  @IsNumber()
  supervisor_id?: number;
}
