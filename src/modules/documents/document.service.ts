import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateDocumentDTO } from './create-document.dto';
import { UpdateDocumentDTO } from './update-document.dto';
import { Document } from './document.model';

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService) {}

  async create(createDocumentDto: CreateDocumentDTO): Promise<Document> {
    try {
      return await this.prisma.document.create({ data: createDocumentDto });
    } catch (error) {
      this.logger.error('Error creating a new document', { error });
      throw error;
    }
  }

  @CacheKey('allDocuments')
  @CacheTTL(30)
  async findAll(): Promise<Document[]> {
    return await this.prisma.document.findMany();
  }

  @CacheKey('oneDocument')
  @CacheTTL(30)
  async findOne(id: number): Promise<Document> {
    return await this.prisma.document.findUnique({
      where: { document_id: id },
    });
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDTO): Promise<Document> {
    try {
      return await this.prisma.document.update({
        where: { document_id: id },
        data: updateDocumentDto,
      });
    } catch (error) {
      this.logger.error('Error updating a document', { error });
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log('info', 'Removing a document', { id });
      this.prisma.document.delete({
        where: { document_id: id },
      });
    } catch (error) {
      this.logger.error('Error removing a document', { error });
      throw error;
    }
  }
}
