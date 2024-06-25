import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateHierarchicalRelationshipDTO } from './create-hierarchical_relationship.dto';
import { UpdateHierarchicalRelationshipDTO } from './update-hierarchical_relationship.dto';
import { HierarchicalRelationship } from './hierarchical-relationship.model';

@Injectable()
export class HierarchicalRelationshipService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService
  ) {}

  async create(createHierarchicalRelationshipDto: CreateHierarchicalRelationshipDTO): Promise<HierarchicalRelationship> {
    try {
      return await this.prisma.hierarchicalRelationship.create({
        data: createHierarchicalRelationshipDto,
      });
    } catch (error) {
      this.logger.error('Error creating a new hierarchical relationship', { error });
      throw error;
    }
  }

  async findAll(): Promise<HierarchicalRelationship[]> {
    return await this.prisma.hierarchicalRelationship.findMany();
  }

  async findOne(id: number): Promise<HierarchicalRelationship> {
    return await this.prisma.hierarchicalRelationship.findUnique({
      where: { relationship_id: id },
    });
  }

  async update(id: number, updateHierarchicalRelationshipDto: UpdateHierarchicalRelationshipDTO): Promise<HierarchicalRelationship> {
    try {
      return await this.prisma.hierarchicalRelationship.update({
        where: { relationship_id: id },
        data: updateHierarchicalRelationshipDto,
      });
    } catch (error) {
      this.logger.error('Error updating a hierarchical relationship', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing a hierarchical relationship', { id });
      await this.prisma.hierarchicalRelationship.delete({
        where: { relationship_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a hierarchical relationship', { error });
      throw error;
    }
  }
}
