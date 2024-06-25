import { IsString, IsBoolean, IsDateString, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLegalEntityDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson associated to this Legal Entity' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: 'Trade Name', description: 'Trade name of the legal entity' })
  @IsString()
  trade_name: string;

  @ApiProperty({ example: 'Corporate Name', description: 'Corporate name of the legal entity' })
  @IsString()
  corporate_name: string;

  @ApiProperty({ example: '2022-01-01', description: 'Opening date of the legal entity' })
  @IsDateString()
  opening_date: Date;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: true, description: 'Indicates if the legal entity is active' })
  @IsBoolean()
  active: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the legal entity' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
