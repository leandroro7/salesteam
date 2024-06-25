import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSalesPersonDTO } from './create.sales-person.dto';
import { UpdateSalesPersonDTO } from './update.sales-person.dto';
import { SalesPerson } from './sales-person.model';

@Injectable()
export class SalesPersonService {
  constructor(private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService) {}

  async create(createPersonDto: CreateSalesPersonDTO): Promise<SalesPerson> {
    try {
      return await this.prisma.salesPerson.create({ data: createPersonDto });
    } catch (error) {
      this.logger.error('Error creating a new sales-person', { error });
      throw error;
    }
  }

  @CacheKey('allSalesPersons')
  @CacheTTL(30)
  async findAll(): Promise<SalesPerson[]> {
    return await this.prisma.salesPerson.findMany();
  }

  @CacheKey('oneSalesPerson')
  @CacheTTL(30)
  async findOne(id: number): Promise<SalesPerson> {
    return await this.prisma.salesPerson.findUnique({
      where: { sales_person_id: id },
    });
  }

  async update(id: number, updatePersonDto: UpdateSalesPersonDTO): Promise<SalesPerson> {
    try {
      return await this.prisma.salesPerson.update({
        where: { sales_person_id: id },
        data: updatePersonDto,
      });
    } catch (error) {
      this.logger.error('Error updating a sales-person', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<SalesPerson> {
    try {
      this.logger.log('info', 'Removing a sales-person', { id });
      return await this.prisma.salesPerson.delete({
        where: { sales_person_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a sales-person', { error });
      throw error;
    }
  }
}
