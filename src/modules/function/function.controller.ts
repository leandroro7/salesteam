import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { FunctionService } from './function.service';
import { CreateFunctionDTO } from './create-functions.dto';
import { UpdateFunctionDTO } from './update-functions.dto';
import { Function } from './function.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('functions')
@Controller('functions')
@UseInterceptors(CacheInterceptor)
export class FunctionController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache,
              private readonly functionService: FunctionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new function' })
  @ApiResponse({ status: 201, description: 'The function has been successfully created.', type: Function })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateFunctionDTO })
  async create(@Body() createFunctionDto: CreateFunctionDTO): Promise<Function> {
    return this.functionService.create(createFunctionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all functions' })
  @ApiResponse({ status: 200, description: 'Return all functions.', type: [Function] })
  async findAll(): Promise<Function[]> {
    return this.functionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get function by ID' })
  @ApiParam({ name: 'id', description: 'ID of the function to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the function.', type: Function })
  @ApiResponse({ status: 404, description: 'Function not found.' })
  async findOne(@Param('id') id: number): Promise<Function> {
    return this.functionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update function by ID' })
  @ApiParam({ name: 'id', description: 'ID of the function to update' })
  @ApiBody({ type: UpdateFunctionDTO })
  @ApiResponse({ status: 200, description: 'The function has been successfully updated.', type: Function })
  @ApiResponse({ status: 404, description: 'Function not found.' })
  async update(@Param('id') id: number, @Body() updateFunctionDto: UpdateFunctionDTO): Promise<Function> {
    return this.functionService.update(id, updateFunctionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete function by ID' })
  @ApiParam({ name: 'id', description: 'ID of the function to delete' })
  @ApiResponse({ status: 204, description: 'The function has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Function not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.functionService.remove(id);
  }
}
