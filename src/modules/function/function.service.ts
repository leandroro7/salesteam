import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateFunctionDTO } from './create-functions.dto';
import { UpdateFunctionDTO } from './update-functions.dto';
import { Function } from './function.model';

@Injectable()
export class FunctionService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService
  ) {}

  async create(createFunctionDto: CreateFunctionDTO): Promise<Function> {
    try {
      return await this.prisma.function.create({
        data: createFunctionDto,
      });
    } catch (error) {
      this.logger.error('Error creating a new function', { error });
      throw error;
    }
  }

  async findAll(): Promise<Function[]> {
    return await this.prisma.function.findMany();
  }

  async findOne(id: number): Promise<Function> {
    return await this.prisma.function.findUnique({
      where: { function_id: id },
    });
  }

  async update(id: number, updateFunctionDto: UpdateFunctionDTO): Promise<Function> {
    try {
      return await this.prisma.function.update({
        where: { function_id: id },
        data: updateFunctionDto,
      });
    } catch (error) {
      this.logger.error('Error updating a function', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing a function', { id });
      await this.prisma.function.delete({
        where: { function_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a function', { error });
      throw error;
    }
  }
}
