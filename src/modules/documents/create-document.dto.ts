import { IsString, IsBoolean, IsDateString, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDocumentDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson associated to this Document' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: '123456789', description: 'Document number' })
  @IsString()
  document_number: string;

  @ApiProperty({ example: '2022-01-01', description: 'Issue date of the document' })
  @IsDateString()
  issue_date: Date;

  @ApiProperty({ example: '2032-01-01', description: 'Expiration date of the document' })
  @IsDateString()
  expiration_date: Date;

  @ApiProperty({ example: 'Authority', description: 'Issuing authority of the document' })
  @IsString()
  issuing_authority: string;

  @ApiProperty({ example: 'Passport', description: 'Type of the document' })
  @IsString()
  document_type: string;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: true, description: 'Indicates if the document is active' })
  @IsBoolean()
  active: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the document' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
