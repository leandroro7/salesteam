import { IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHierarchicalRelationshipDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson in the relationship' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: 2, description: 'ID of the supervisor' })
  @IsNumber()
  supervisor_id: number;

  @ApiProperty({ example: true, description: 'Indicates if the person is active' })
  @IsBoolean()
  active: boolean;
}
