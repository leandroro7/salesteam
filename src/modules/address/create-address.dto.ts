import { IsString, IsOptional, IsNumber, IsBoolean, IsNumberString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAddressDTO {
  @ApiProperty({ example: 1, description: 'ID of SalesPerson associated to this Address' })
  @IsNumber()
  sales_person_id: number;

  @ApiProperty({ example: 'Rua', description: 'Type of the address' })
  @IsString()
  address_type: string;

  @ApiProperty({ example: 123, description: 'House or apartment number' })
  @IsNumber()
  number: number;

  @ApiProperty({ example: '12345-678', description: 'Postal code of the address' })
  @IsString()
  postal_code: string;

  @ApiPropertyOptional({ example: 'Apt 101', description: 'Complementary information for the address' })
  @IsString()
  @IsOptional()
  complement?: string;

  @ApiProperty({ example: 'Main St', description: 'Street name of the address' })
  @IsString()
  street: string;

  @ApiProperty({ example: 'Downtown', description: 'Neighborhood of the address' })
  @IsString()
  neighborhood: string;

  @ApiProperty({ example: 'New York', description: 'City of the address' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'NY', description: 'State of the address' })
  @IsString()
  state: string;

  @ApiProperty({ example: 'USA', description: 'Country of the address' })
  @IsString()
  country: string;

  @ApiPropertyOptional({ example: 'NYC', description: 'Geocode of the state' })
  @IsString()
  @IsOptional()
  state_geocode?: string;

  @ApiPropertyOptional({ example: 'New York', description: 'Geocode of the city' })
  @IsString()
  @IsOptional()
  city_geocode?: string;

  @ApiPropertyOptional({ example: '123 Main St, New York, NY', description: 'Geocode of the address' })
  @IsString()
  @IsOptional()
  address_geocode?: string;

  @ApiPropertyOptional({ example: '40.7128', description: 'Latitude of the address' })
  @IsString()
  @IsOptional()
  latitude?: string;

  @ApiPropertyOptional({ example: '-74.0060', description: 'Longitude of the address' })
  @IsString()
  @IsOptional()
  longitude?: string;

  @ApiProperty({ example: 'user123', description: 'Username of the person who created the record' })
  @IsString()
  created_by: string;

  @ApiProperty({ example: 'user456', description: 'Username of the person who last updated the record' })
  @IsString()
  updated_by: string;

  @ApiProperty({ example: true, description: 'Indicates if the address is active' })
  @IsBoolean()
  active: boolean;

  @ApiPropertyOptional({ example: 1234567890, description: 'Booster account ID associated with the address' })
  @IsOptional()
  @IsNumberString()
  b_account_id?: bigint;
}
