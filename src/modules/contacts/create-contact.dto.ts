import { IsString, IsBoolean, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContactDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson associated to this Contact' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: 'Email', description: 'Type of the contact' })
  @IsString()
  contact_type: string;

  @ApiProperty({ example: 'example@example.com', description: 'Value of the contact' })
  @IsString()
  contact_value: string;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: true, description: 'Indicates if the contact is active' })
  @IsBoolean()
  active: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the contact' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}

  