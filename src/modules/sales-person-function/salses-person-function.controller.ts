import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { SalesPersonFunctionService } from './create-sales-person-function.service';
import { CreateSalesPersonFunctionDTO } from './create-sales-person-function.dto';
import { UpdateSalesPersonFunctionDTO } from './update-sales-person-function.dto';
import { SalesPersonFunction } from './salses-person-function.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('sales_person_functions')
@Controller('sales_person_functions')
@UseInterceptors(CacheInterceptor)
export class SalesPersonFunctionController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache,
              private readonly salesPersonFunctionService: SalesPersonFunctionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new sales person function' })
  @ApiResponse({ status: 201, description: 'The sales person function has been successfully created.', type: SalesPersonFunction })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateSalesPersonFunctionDTO })
  async create(@Body() createSalesPersonFunctionDto: CreateSalesPersonFunctionDTO): Promise<SalesPersonFunction> {
    return this.salesPersonFunctionService.create(createSalesPersonFunctionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales person functions' })
  @ApiResponse({ status: 200, description: 'Return all sales person functions.', type: [SalesPersonFunction] })
  async findAll(): Promise<SalesPersonFunction[]> {
    return this.salesPersonFunctionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales person function by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sales person function to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the sales person function.', type: SalesPersonFunction })
  @ApiResponse({ status: 404, description: 'Sales person function not found.' })
  async findOne(@Param('id') id: number): Promise<SalesPersonFunction> {
    return this.salesPersonFunctionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update sales person function by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sales person function to update' })
  @ApiBody({ type: UpdateSalesPersonFunctionDTO })
  @ApiResponse({ status: 200, description: 'The sales person function has been successfully updated.', type: SalesPersonFunction })
  @ApiResponse({ status: 404, description: 'Sales person function not found.' })
  async update(@Param('id') id: number, @Body() updateSalesPersonFunctionDto: UpdateSalesPersonFunctionDTO): Promise<SalesPersonFunction> {
    return this.salesPersonFunctionService.update(id, updateSalesPersonFunctionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sales person function by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sales person function to delete' })
  @ApiResponse({ status: 204, description: 'The sales person function has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Sales person function not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.salesPersonFunctionService.remove(id);
  }
}
