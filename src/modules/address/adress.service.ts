import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAddressDTO } from './create-address.dto';
import { UpdateAddressDTO } from './update-address.dto';
import { Address } from './address.model';

@Injectable()
export class AddressService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService
  ) {}

  async create(createAddressDto: CreateAddressDTO): Promise<Address> {
    try {
      const { sales_person_id, ...data } = createAddressDto;

      return await this.prisma.address.create({
        data: {
          ...data,
          sales_person: {
            connect: { sales_person_id },
          },
        },
        include: { sales_person: true }, // Inclui 'person' no retorno
      });
    } catch (error) {
      this.logger.error('Error creating a new address', { error });
      throw error;
    }
  }

  @CacheKey('allAddresses')
  @CacheTTL(30)
  async findAll(): Promise<Address[]> {
    return await this.prisma.address.findMany({ include: { sales_person: true } });
  }

  @CacheKey('oneAddress')
  @CacheTTL(30)
  async findOne(id: number): Promise<Address> {
    return await this.prisma.address.findUnique({
      where: { address_id: id },
      include: { sales_person: true },
    });
  }

  async update(id: number, updateAddressDto: UpdateAddressDTO): Promise<Address> {
    try {
      const { sales_person_id, ...data } = updateAddressDto;

      return await this.prisma.address.update({
        where: { address_id: id },
        data: {
          ...data,
          sales_person: {
            connect: { sales_person_id },
          },
        },
        include: { sales_person: true }, // Inclui 'person' no retorno
      });
    } catch (error) {
      this.logger.error('Error updating an address', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing an address', { id });
      await this.prisma.address.delete({
        where: { address_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing an address', { error });
      throw error;
    }
  }
}