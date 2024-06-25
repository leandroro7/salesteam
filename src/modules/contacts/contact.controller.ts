import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './create-contact.dto';
import { UpdateContactDTO } from './update-contact.dto';
import { Contact } from './contact.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('contacts')
@Controller('contacts')
@UseInterceptors(CacheInterceptor)
export class ContactController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new contact' })
  @ApiResponse({ status: 201, description: 'The contact has been successfully created.', type: Contact })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateContactDTO })
  async create(@Body() createContactDto: CreateContactDTO): Promise<Contact> {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contacts' })
  @ApiResponse({ status: 200, description: 'Return all contacts.', type: [Contact] })
  async findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get contact by ID' })
  @ApiParam({ name: 'id', description: 'ID of the contact to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the contact.', type: Contact })
  @ApiResponse({ status: 404, description: 'Contact not found.' })
  async findOne(@Param('id') id: number): Promise<Contact> {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update contact by ID' })
  @ApiParam({ name: 'id', description: 'ID of the contact to update' })
  @ApiBody({ type: UpdateContactDTO })
  @ApiResponse({ status: 200, description: 'The contact has been successfully updated.', type: Contact })
  @ApiResponse({ status: 404, description: 'Contact not found.' })
  async update(@Param('id') id: number, @Body() updateContactDto: UpdateContactDTO): Promise<Contact> {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete contact by ID' })
  @ApiParam({ name: 'id', description: 'ID of the contact to delete' })
  @ApiResponse({ status: 204, description: 'The contact has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Contact not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.contactService.remove(id);
  }
}
