import { IsString, IsNumberString, IsOptional, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFunctionDTO {
  @ApiPropertyOptional({ example: 'Function Description', description: 'Description of the function' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the function' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the person is active' })
  @IsBoolean()
  active: boolean;
}
