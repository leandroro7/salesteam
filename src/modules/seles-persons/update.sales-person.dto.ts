import { IsString, IsBoolean, IsOptional, IsNumberString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSalesPersonDTO {
  @ApiPropertyOptional({ example: 'Individual', description: 'Type of the person' })
  @IsOptional()
  @IsString()
  sales_person_type?: string;

  @ApiPropertyOptional({ example: 'user123', description: 'Username of the person who created the record' })
  @IsOptional()
  @IsString()
  created_by?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the person is active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the person' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
