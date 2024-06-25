import { IsString, IsOptional, IsNumber, IsBoolean, IsNumberString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAddressDTO {
  @ApiPropertyOptional({ example: 1, description: 'ID of SalesPerson associated to this Address' })
  @IsOptional()
  @IsNumber()
  sales_person_id?: number;

  @ApiPropertyOptional({ example: 'Rua', description: 'Type of the address' })
  @IsOptional()
  @IsString()
  address_type?: string;

  @ApiPropertyOptional({ example: 123, description: 'House or apartment number' })
  @IsOptional()
  @IsNumber()
  number?: number;

  @ApiPropertyOptional({ example: '12345-678', description: 'Postal code of the address' })
  @IsOptional()
  @IsString()
  postal_code?: string;

  @ApiPropertyOptional({ example: 'Apt 101', description: 'Complementary information for the address' })
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiPropertyOptional({ example: 'Main St', description: 'Street name of the address' })
  @IsOptional()
  @IsString()
  street?: string;

  @ApiPropertyOptional({ example: 'Downtown', description: 'Neighborhood of the address' })
  @IsOptional()
  @IsString()
  neighborhood?: string;

  @ApiPropertyOptional({ example: 'New York', description: 'City of the address' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ example: 'NY', description: 'State of the address' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ example: 'USA', description: 'Country of the address' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ example: 'NYC', description: 'Geocode of the state' })
  @IsOptional()
  @IsString()
  state_geocode?: string;

  @ApiPropertyOptional({ example: 'New York', description: 'Geocode of the city' })
  @IsOptional()
  @IsString()
  city_geocode?: string;

  @ApiPropertyOptional({ example: '123 Main St, New York, NY', description: 'Geocode of the address' })
  @IsOptional()
  @IsString()
  address_geocode?: string;

  @ApiPropertyOptional({ example: '40.7128', description: 'Latitude of the address' })
  @IsOptional()
  @IsString()
  latitude?: string;

  @ApiPropertyOptional({ example: '-74.0060', description: 'Longitude of the address' })
  @IsOptional()
  @IsString()
  longitude?: string;

  @ApiPropertyOptional({ example: 'user123', description: 'Username of the person who created the record' })
  @IsOptional()
  @IsString()
  created_by?: string;

  @ApiPropertyOptional({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsOptional()
  @IsString()
  updated_by?: string;

  @ApiPropertyOptional({ example: true, description: 'Indicates if the address is active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the address' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
