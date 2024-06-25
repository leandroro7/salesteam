import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { SalesPersonService } from './sales-person.service';
import { CreateSalesPersonDTO } from './create.sales-person.dto';
import { UpdateSalesPersonDTO } from './update.sales-person.dto';
import { SalesPerson } from './sales-person.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('Sales Persons')
@Controller('salse_persons')
@UseInterceptors(CacheInterceptor)
export class SalsePersonController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly salesPersonService: SalesPersonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new sales-person' })
  @ApiResponse({ status: 201, description: 'The sales-person has been successfully created.', type: SalesPerson })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateSalesPersonDTO })
  async create(@Body() createSalesPersonDto: CreateSalesPersonDTO): Promise<SalesPerson> {
    return this.salesPersonService.create(createSalesPersonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales-persons' })
  @ApiResponse({ status: 200, description: 'Return all sales-persons.', type: [SalesPerson] })
  async findAll(): Promise<SalesPerson[]> {
    return this.salesPersonService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales-person by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sales-person to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the sales-person.', type: SalesPerson })
  @ApiResponse({ status: 404, description: 'SalesPerson not found.' })
  async findOne(@Param('id') id: number): Promise<SalesPerson> {
    return this.salesPersonService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update sales-person by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sales-person to update' })
  @ApiBody({ type: UpdateSalesPersonDTO })
  @ApiResponse({ status: 200, description: 'The sales-person has been successfully updated.', type: SalesPerson })
  @ApiResponse({ status: 404, description: 'SalesPerson not found.' })
  async update(@Param('id') id: number, @Body() updatePersonDto: UpdateSalesPersonDTO): Promise<SalesPerson> {
    return this.salesPersonService.update(id, updatePersonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sales-person by ID' })
  @ApiParam({ name: 'id', description: 'ID of the person to delete' })
  @ApiResponse({ status: 204, description: 'The person has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'SalesPerson not found.' })
  async remove(@Param('id') id: number): Promise<SalesPerson> {
    return this.salesPersonService.remove(id);
  }
}
