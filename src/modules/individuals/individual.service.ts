import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateIndividualDTO } from './update-individual.dto';
import { CreateIndividualDTO } from './create-individual.dto';
import { Individual } from './individual.model';

@Injectable()
export class IndividualService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService
  ) {}

  async create(createIndividualDto: CreateIndividualDTO): Promise<Individual> {
    try {
      const { sales_person_id, ...data } = createIndividualDto;
  
      return await this.prisma.individual.create({
        data: {
          ...data,
          sales_person: {
            connect: { sales_person_id },
          },
        },
        include: { sales_person: true },
      });
    } catch (error) {
      this.logger.error('Error creating a new individual', { error });
      throw error;
    }
  }

  @CacheKey('allIndividuals')
  @CacheTTL(30)
  async findAll(): Promise<Individual[]> {
    return await this.prisma.individual.findMany({ include: { sales_person: true } });
  }

  @CacheKey('oneIndividual')
  @CacheTTL(30)
  async findOne(id: number): Promise<Individual> {
    return await this.prisma.individual.findUnique({
      where: { individual_id: id },
      include: { sales_person: true },
    });
  }

  async update(id: number, updateIndividualDto: UpdateIndividualDTO): Promise<Individual> {
    try {
      const { sales_person_id, ...data } = updateIndividualDto;

      return await this.prisma.individual.update({
        where: { individual_id: id },
        data: {
          ...data,
          sales_person: {
            connect: { sales_person_id },
          },
        },
        include: { sales_person: true },
      });
    } catch (error) {
      this.logger.error('Error updating an individual', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing an individual', { id });
      await this.prisma.individual.delete({
        where: { individual_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing an individual', { error });
      throw error;
    }
  }
}