import { IsString, IsBoolean, IsOptional, IsNumberString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSalesPersonDTO {
  @ApiProperty({ example: 'Individual', description: 'Type of the person' })
  @IsString()
  sales_person_type: string;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: true, description: 'Indicates if the person is active' })
  @IsBoolean()
  active: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the person' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
