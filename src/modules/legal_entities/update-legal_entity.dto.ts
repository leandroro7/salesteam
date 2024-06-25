import { IsString, IsBoolean, IsDateString, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLegalEntityDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson associated to this Legal Entity' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: 'Trade Name', description: 'Trade name of the legal entity' })
  @IsOptional()
  @IsString()
  trade_name?: string;

  @ApiPropertyOptional({ example: 'Corporate Name', description: 'Corporate name of the legal entity' })
  @IsOptional()
  @IsString()
  corporate_name?: string;

  @ApiPropertyOptional({ example: '2022-01-01', description: 'Opening date of the legal entity' })
  @IsOptional()
  @IsDateString()
  opening_date?: Date;

  @ApiPropertyOptional({ example: 'user123', description: 'Username of the person who created the record' })
  @IsOptional()
  @IsString()
  created_by?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the legal entity is active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the legal entity' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
