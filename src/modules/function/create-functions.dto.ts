import { IsString, IsNumberString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFunctionDTO {
  @ApiProperty({ example: 'Function Description', description: 'Description of the function' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: 1234567890, description: 'Booster account ID associated with the function' })
  @IsNumberString()
  b_account_id: bigint;

  @ApiProperty({ example: true, description: 'Indicates if the person is active' })
  @IsBoolean()
  active: boolean;
}
