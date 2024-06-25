import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateLegalEntityDTO } from './create-legal_entity.dto';
import { UpdateLegalEntityDTO } from './update-legal_entity.dto';
import { LegalEntity } from './legal-entity.model';

@Injectable()
export class LegalEntityService {
  constructor(private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService) {}

  async create(createLegalEntityDto: CreateLegalEntityDTO): Promise<LegalEntity> {
    try {
      return await this.prisma.legalEntity.create({ data: createLegalEntityDto });
    } catch (error) {
      this.logger.error('Error creating a new legal entity', { error });
      throw error;
    }
  }

  @CacheKey('allLegalEntities')
  @CacheTTL(30)
  async findAll(): Promise<LegalEntity[]> {
    return await this.prisma.legalEntity.findMany();
  }

  @CacheKey('oneLegalEntity')
  @CacheTTL(30)
  async findOne(id: number): Promise<LegalEntity> {
    return await this.prisma.legalEntity.findUnique({
      where: { legal_entity_id: id },
    });
  }

  async update(id: number, updateLegalEntityDto: UpdateLegalEntityDTO): Promise<LegalEntity> {
    try {
      return await this.prisma.legalEntity.update({
        where: { legal_entity_id: id },
        data: updateLegalEntityDto,
      });
    } catch (error) {
      this.logger.error('Error updating a legal entity', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<LegalEntity> {
    try {
      this.logger.log('info', 'Removing a legal entity', { id });
      return await this.prisma.legalEntity.delete({
        where: { legal_entity_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a legal entity', { error });
      throw error;
    }
  }
}
