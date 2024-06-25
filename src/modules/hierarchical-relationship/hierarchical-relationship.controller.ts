import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { HierarchicalRelationshipService } from './create-hierarchical_relationship.service';
import { CreateHierarchicalRelationshipDTO } from './create-hierarchical_relationship.dto';
import { UpdateHierarchicalRelationshipDTO } from './update-hierarchical_relationship.dto';
import { HierarchicalRelationship } from './hierarchical-relationship.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('hierarchical_relationships')
@Controller('hierarchical_relationships')
@UseInterceptors(CacheInterceptor)
export class HierarchicalRelationshipController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache,
              private readonly hierarchicalRelationshipService: HierarchicalRelationshipService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new hierarchical relationship' })
  @ApiResponse({ status: 201, description: 'The hierarchical relationship has been successfully created.', type: HierarchicalRelationship })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateHierarchicalRelationshipDTO })
  async create(@Body() createHierarchicalRelationshipDto: CreateHierarchicalRelationshipDTO): Promise<HierarchicalRelationship> {
    return this.hierarchicalRelationshipService.create(createHierarchicalRelationshipDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all hierarchical relationships' })
  @ApiResponse({ status: 200, description: 'Return all hierarchical relationships.', type: [HierarchicalRelationship] })
  async findAll(): Promise<HierarchicalRelationship[]> {
    return this.hierarchicalRelationshipService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get hierarchical relationship by ID' })
  @ApiParam({ name: 'id', description: 'ID of the hierarchical relationship to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the hierarchical relationship.', type: HierarchicalRelationship })
  @ApiResponse({ status: 404, description: 'Hierarchical relationship not found.' })
  async findOne(@Param('id') id: number): Promise<HierarchicalRelationship> {
    return this.hierarchicalRelationshipService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update hierarchical relationship by ID' })
  @ApiParam({ name: 'id', description: 'ID of the hierarchical relationship to update' })
  @ApiBody({ type: UpdateHierarchicalRelationshipDTO })
  @ApiResponse({ status: 200, description: 'The hierarchical relationship has been successfully updated.', type: HierarchicalRelationship })
  @ApiResponse({ status: 404, description: 'Hierarchical relationship not found.' })
  async update(@Param('id') id: number, @Body() updateHierarchicalRelationshipDto: UpdateHierarchicalRelationshipDTO): Promise<HierarchicalRelationship> {
    return this.hierarchicalRelationshipService.update(id, updateHierarchicalRelationshipDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete hierarchical relationship by ID' })
  @ApiParam({ name: 'id', description: 'ID of the hierarchical relationship to delete' })
  @ApiResponse({ status: 204, description: 'The hierarchical relationship has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Hierarchical relationship not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.hierarchicalRelationshipService.remove(id);
  }
}
