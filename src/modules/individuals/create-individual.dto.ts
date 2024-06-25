import { IsString, IsBoolean, IsDateString, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateIndividualDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson associated to this Individual' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the individual' })
  @IsString()
  full_name: string;

  @ApiProperty({ example: 'he/him', description: 'Pronoun of the individual' })
  @IsString()
  pronoun: string;

  @ApiPropertyOptional({ example: 'Johnny', description: 'Social name of the individual' })
  @IsOptional()
  @IsString()
  social_name: string;

  @ApiProperty({ example: '1990-01-01', description: 'Birth date of the individual' })
  @IsDateString()
  birth_date: Date;

  @ApiProperty({ example: 'Male', description: 'Gender of the individual' })
  @IsString()
  gender: string;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: true, description: 'Indicates if the individual is active' })
  @IsBoolean()
  active: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the individual' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
