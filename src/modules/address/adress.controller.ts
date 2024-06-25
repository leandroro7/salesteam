import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { AddressService } from './adress.service';
import { CreateAddressDTO } from './create-address.dto';
import { UpdateAddressDTO } from './update-address.dto';
import { Address } from './address.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('addresses')
@Controller('addresses')
@UseInterceptors(CacheInterceptor)
export class AddressController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache,
  private readonly addressService: AddressService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new address' })
  @ApiResponse({ status: 201, description: 'The address has been successfully created.', type: Address })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateAddressDTO })
  async create(@Body() createAddressDto: CreateAddressDTO): Promise<Address> {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all addresses' })
  @ApiResponse({ status: 200, description: 'Return all addresses.', type: [Address] })
  async findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get address by ID' })
  @ApiParam({ name: 'id', description: 'ID of the address to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the address.', type: Address })
  @ApiResponse({ status: 404, description: 'Address not found.' })
  async findOne(@Param('id') id: number): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update address by ID' })
  @ApiParam({ name: 'id', description: 'ID of the address to update' })
  @ApiBody({ type: UpdateAddressDTO })
  @ApiResponse({ status: 200, description: 'The address has been successfully updated.', type: Address })
  @ApiResponse({ status: 404, description: 'Address not found.' })
  async update(@Param('id') id: number, @Body() updateAddressDto: UpdateAddressDTO): Promise<Address> {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete address by ID' })
  @ApiParam({ name: 'id', description: 'ID of the address to delete' })
  @ApiResponse({ status: 204, description: 'The address has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Address not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.addressService.remove(id);
  }
}
