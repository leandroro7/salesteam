import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/cache-manager';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AddressController } from './modules/address/adress.controller';
import { SalesPersonFunctionController } from './modules/sales-person-function/salses-person-function.controller';
import { SalesPersonFunctionService } from './modules/sales-person-function/create-sales-person-function.service';
import { HierarchicalRelationshipController } from './modules//hierarchical-relationship/hierarchical-relationship.controller';
import { HierarchicalRelationshipService } from './modules/hierarchical-relationship/create-hierarchical_relationship.service'; 
import { FunctionController } from './modules/function/function.controller';
import { FunctionService } from './modules/function/function.service';
import { ContactController } from './modules/contacts/contact.controller';
import { DocumentController } from './modules/documents/document.controller';
import { IndividualController } from './modules/individuals/individual.controller';
import { LegalEntityController } from './modules/legal_entities/legal_entity.controller';
import { SalesPersonService } from './modules/seles-persons/sales-person.service';
import { SalsePersonController } from './modules/seles-persons/sales-person.controller';
import { AddressService } from './modules/address/adress.service';
import { ContactService } from './modules/contacts/contact.service';
import { DocumentService } from './modules/documents/document.service';
import { IndividualService } from './modules/individuals/individual.service';
import { LegalEntityService } from './modules/legal_entities/legal_entity.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CacheModule.register({
      ttl: 5, // tempo de vida do cache em segundos
      max: 100, // máximo de itens no cache
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.prettyPrint(),
            winston.format.colorize({ all: true })
          ),
        }),
        new winston.transports.File({ filename: 'combined.log' })
      ],
    }),
  ],
  controllers: [
    AddressController,
    SalesPersonFunctionController,
    HierarchicalRelationshipController,
    ContactController,
    DocumentController,
    IndividualController,
    LegalEntityController,
    FunctionController,
    SalsePersonController,
  ],
  providers: [
    AddressService,
    SalesPersonFunctionService,
    ContactService,
    DocumentService,
    IndividualService,
    LegalEntityService,
    HierarchicalRelationshipService,
    FunctionService,
    SalesPersonService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}

