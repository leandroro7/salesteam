import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSalesPersonFunctionDTO } from './create-sales-person-function.dto';
import { UpdateSalesPersonFunctionDTO } from './update-sales-person-function.dto';
import { SalesPersonFunction } from './salses-person-function.model';

@Injectable()
export class SalesPersonFunctionService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService
  ) {}

  async create(createSalesPersonFunctionDto: CreateSalesPersonFunctionDTO): Promise<SalesPersonFunction> {
    try {
      return await this.prisma.salesPersonFunction.create({
        data: createSalesPersonFunctionDto,
      });
    } catch (error) {
      this.logger.error('Error creating a new sales person function', { error });
      throw error;
    }
  }

  async findAll(): Promise<SalesPersonFunction[]> {
    return await this.prisma.salesPersonFunction.findMany();
  }

  async findOne(id: number): Promise<SalesPersonFunction> {
    return await this.prisma.salesPersonFunction.findUnique({
      where: { sales_person_function_id: id },
    });
  }

  async update(id: number, updateSalesPersonFunctionDto: UpdateSalesPersonFunctionDTO): Promise<SalesPersonFunction> {
    try {
      return await this.prisma.salesPersonFunction.update({
        where: { sales_person_function_id: id },
        data: updateSalesPersonFunctionDto,
      });
    } catch (error) {
      this.logger.error('Error updating a sales person function', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing a sales person function', { id });
      await this.prisma.salesPersonFunction.delete({
        where: { sales_person_function_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a sales person function', { error });
      throw error;
    }
  }
}
