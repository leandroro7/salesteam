import { IsString, IsBoolean, IsDateString, IsOptional, IsNumber, IsNumberString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateIndividualDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson associated to this Individual' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: 'John Doe', description: 'Full name of the individual' })
  @IsOptional()
  @IsString()
  full_name?: string;

  @ApiPropertyOptional({ example: 'he/him', description: 'Pronoun of the individual' })
  @IsOptional()
  @IsString()
  pronoun?: string;

  @ApiPropertyOptional({ example: 'Johnny', description: 'Social name of the individual' })
  @IsOptional()
  @IsString()
  social_name?: string;

  @ApiPropertyOptional({ example: '1990-01-01', description: 'Birth date of the individual' })
  @IsOptional()
  @IsDateString()
  birth_date?: Date;

  @ApiPropertyOptional({ example: 'Male', description: 'Gender of the individual' })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiPropertyOptional({ example: 'user123', description: 'Username of the person who created the record' })
  @IsOptional()
  @IsString()
  created_by?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the individual is active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the individual' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
