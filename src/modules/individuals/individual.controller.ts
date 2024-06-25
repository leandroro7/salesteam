import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { IndividualService } from './individual.service';
import { CreateIndividualDTO } from './create-individual.dto';
import { UpdateIndividualDTO } from './update-individual.dto';
import { Individual } from './individual.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('individuals')
@Controller('individuals')
@UseInterceptors(CacheInterceptor)
export class IndividualController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly individualService: IndividualService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new individual' })
  @ApiResponse({ status: 201, description: 'The individual has been successfully created.', type: Individual })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateIndividualDTO })
  async create(@Body() createIndividualDto: CreateIndividualDTO): Promise<Individual> {
    return this.individualService.create(createIndividualDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all individuals' })
  @ApiResponse({ status: 200, description: 'Return all individuals.', type: [Individual] })
  async findAll(): Promise<Individual[]> {
    return this.individualService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get individual by ID' })
  @ApiParam({ name: 'id', description: 'ID of the individual to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the individual.', type: Individual })
  @ApiResponse({ status: 404, description: 'Individual not found.' })
  async findOne(@Param('id') id: number): Promise<Individual> {
    return this.individualService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update individual by ID' })
  @ApiParam({ name: 'id', description: 'ID of the individual to update' })
  @ApiBody({ type: UpdateIndividualDTO })
  @ApiResponse({ status: 200, description: 'The individual has been successfully updated.', type: Individual })
  @ApiResponse({ status: 404, description: 'Individual not found.' })
  async update(@Param('id') id: number, @Body() updateIndividualDto: UpdateIndividualDTO): Promise<Individual> {
    return this.individualService.update(id, updateIndividualDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete individual by ID' })
  @ApiParam({ name: 'id', description: 'ID of the individual to delete' })
  @ApiResponse({ status: 204, description: 'The individual has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Individual not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.individualService.remove(id);
  }
}
