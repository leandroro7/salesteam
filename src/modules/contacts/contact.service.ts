import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateContactDTO } from './create-contact.dto';
import { UpdateContactDTO } from './update-contact.dto';
import { Contact } from './contact.model';
import { SalesPerson } from '../seles-persons/sales-person.model';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService) {}

  async create(createContactDto: CreateContactDTO): Promise<Contact> {
    try {
      return await this.prisma.contact.create({ data: createContactDto });
    } catch (error) {
      this.logger.error('Error creating a new contact', { error });
      throw error;
    }
  }

  @CacheKey('allContacts')
  @CacheTTL(30)
  async findAll(): Promise<Contact[]> {
    return await this.prisma.contact.findMany();
  }

  @CacheKey('oneContact')
  @CacheTTL(30)
  async findOne(id: number): Promise<Contact> {
    return await this.prisma.contact.findUnique({
      where: { contact_id: id },
    });
  }

  async update(id: number, updateContactDto: UpdateContactDTO): Promise<Contact> {
    try {
      return await this.prisma.contact.update({
        where: { contact_id: id },
        data: updateContactDto,
      });
    } catch (error) {
      this.logger.error('Error updating a contact', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing a contact', { id });
      await this.prisma.contact.delete({
        where: { contact_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a contact', { error });
      throw error;
    }
  }
}
