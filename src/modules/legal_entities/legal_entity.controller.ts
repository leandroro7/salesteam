import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { LegalEntityService } from './legal_entity.service';
import { CreateLegalEntityDTO } from './create-legal_entity.dto';
import { UpdateLegalEntityDTO } from './update-legal_entity.dto';
import { LegalEntity } from './legal-entity.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('legal-entities')
@Controller('legal-entities')
@UseInterceptors(CacheInterceptor)
export class LegalEntityController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly legalEntityService: LegalEntityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new legal entity' })
  @ApiResponse({ status: 201, description: 'The legal entity has been successfully created.', type: LegalEntity })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateLegalEntityDTO })
  async create(@Body() createLegalEntityDto: CreateLegalEntityDTO): Promise<LegalEntity> {
    return this.legalEntityService.create(createLegalEntityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all legal entities' })
  @ApiResponse({ status: 200, description: 'Return all legal entities.', type: [LegalEntity] })
  async findAll(): Promise<LegalEntity[]> {
    return this.legalEntityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get legal entity by ID' })
  @ApiParam({ name: 'id', description: 'ID of the legal entity to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the legal entity.', type: LegalEntity })
  @ApiResponse({ status: 404, description: 'Legal entity not found.' })
  async findOne(@Param('id') id: number): Promise<LegalEntity> {
    return this.legalEntityService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update legal entity by ID' })
  @ApiParam({ name: 'id', description: 'ID of the legal entity to update' })
  @ApiBody({ type: UpdateLegalEntityDTO })
  @ApiResponse({ status: 200, description: 'The legal entity has been successfully updated.', type: LegalEntity })
  @ApiResponse({ status: 404, description: 'Legal entity not found.' })
  async update(@Param('id') id: number, @Body() updateLegalEntityDto: UpdateLegalEntityDTO): Promise<LegalEntity> {
    return this.legalEntityService.update(id, updateLegalEntityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete legal entity by ID' })
  @ApiParam({ name: 'id', description: 'ID of the legal entity to delete' })
  @ApiResponse({ status: 204, description: 'The legal entity has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Legal entity not found.' })
  async remove(@Param('id') id: number): Promise<LegalEntity> {
    return this.legalEntityService.remove(id);
  }
}
