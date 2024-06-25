import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDTO } from './create-document.dto';
import { UpdateDocumentDTO } from './update-document.dto';
import { Document } from './document.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('documents')
@Controller('documents')
@UseInterceptors(CacheInterceptor)
export class DocumentController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly documentService: DocumentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new document' })
  @ApiResponse({ status: 201, description: 'The document has been successfully created.', type: Document })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateDocumentDTO })
  async create(@Body() createDocumentDto: CreateDocumentDTO): Promise<Document> {
    return this.documentService.create(createDocumentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all documents' })
  @ApiResponse({ status: 200, description: 'Return all documents.', type: [Document] })
  async findAll(): Promise<Document[]> {
    return this.documentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get document by ID' })
  @ApiParam({ name: 'id', description: 'ID of the document to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the document.', type: Document })
  @ApiResponse({ status: 404, description: 'Document not found.' })
  async findOne(@Param('id') id: number): Promise<Document> {
    return this.documentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update document by ID' })
  @ApiParam({ name: 'id', description: 'ID of the document to update' })
  @ApiBody({ type: UpdateDocumentDTO })
  @ApiResponse({ status: 200, description: 'The document has been successfully updated.', type: Document })
  @ApiResponse({ status: 404, description: 'Document not found.' })
  async update(@Param('id') id: number, @Body() updateDocumentDto: UpdateDocumentDTO): Promise<Document> {
    return this.documentService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete document by ID' })
  @ApiParam({ name: 'id', description: 'ID of the document to delete' })
  @ApiResponse({ status: 204, description: 'The document has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Document not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.documentService.remove(id);
  }
}
