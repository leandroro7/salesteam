import { IsString, IsBoolean, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateContactDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson associated to this Contact' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: 'Email', description: 'Type of the contact' })
  @IsOptional()
  @IsString()
  contact_type?: string;

  @ApiPropertyOptional({ example: 'example@example.com', description: 'Value of the contact' })
  @IsOptional()
  @IsString()
  contact_value?: string;

  @ApiPropertyOptional({ example: 'user123', description: 'Username of the person who created the record' })
  @IsOptional()
  @IsString()
  created_by?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the contact is active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the contact' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}

  