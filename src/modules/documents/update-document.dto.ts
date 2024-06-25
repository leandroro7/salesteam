import { IsString, IsBoolean, IsDateString, IsOptional, IsNumberString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDocumentDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson associated to this Document' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: '123456789', description: 'Document number' })
  @IsOptional()
  @IsString()
  document_number?: string;

  @ApiPropertyOptional({ example: '2022-01-01', description: 'Issue date of the document' })
  @IsOptional()
  @IsDateString()
  issue_date?: Date;

  @ApiPropertyOptional({ example: '2032-01-01', description: 'Expiration date of the document' })
  @IsOptional()
  @IsDateString()
  expiration_date?: Date;

  @ApiPropertyOptional({ example: 'Authority', description: 'Issuing authority of the document' })
  @IsOptional()
  @IsString()
  issuing_authority?: string;

  @ApiPropertyOptional({ example: 'Passport', description: 'Type of the document' })
  @IsOptional()
  @IsString()
  document_type?: string;

  @ApiPropertyOptional({ example: 'user123', description: 'Username of the person who created the record' })
  @IsOptional()
  @IsString()
  created_by?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the document is active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the document' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
