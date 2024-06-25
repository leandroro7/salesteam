-- CreateTable
CREATE TABLE "SalesPerson" (
    "sales_person_id" BIGSERIAL NOT NULL,
    "sales_person_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "active" BOOLEAN NOT NULL,
    "b_account_id" BIGINT,

    CONSTRAINT "SalesPerson_pkey" PRIMARY KEY ("sales_person_id")
);

-- CreateTable
CREATE TABLE "LegalEntity" (
    "legal_entity_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "trade_name" TEXT,
    "corporate_name" TEXT,
    "opening_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "b_account_id" BIGINT,

    CONSTRAINT "LegalEntity_pkey" PRIMARY KEY ("legal_entity_id")
);

-- CreateTable
CREATE TABLE "Individual" (
    "individual_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "full_name" TEXT NOT NULL,
    "pronoun" TEXT,
    "social_name" TEXT,
    "birth_date" TIMESTAMP(3),
    "gender" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "b_account_id" BIGINT,

    CONSTRAINT "Individual_pkey" PRIMARY KEY ("individual_id")
);

-- CreateTable
CREATE TABLE "Document" (
    "document_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "document_number" TEXT,
    "issue_date" TIMESTAMP(3),
    "expiration_date" TIMESTAMP(3),
    "issuing_authority" TEXT,
    "document_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "b_account_id" BIGINT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "Address" (
    "address_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "address_type" TEXT,
    "number" INTEGER,
    "postal_code" TEXT,
    "complement" TEXT,
    "street" TEXT,
    "neighborhood" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "state_geocode" TEXT,
    "city_geocode" TEXT,
    "address_geocode" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "b_account_id" BIGINT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "contact_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "contact_type" TEXT,
    "contact_value" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "b_account_id" BIGINT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("contact_id")
);

-- CreateTable
CREATE TABLE "Function" (
    "function_id" BIGSERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,
    "b_account_id" BIGINT,

    CONSTRAINT "Function_pkey" PRIMARY KEY ("function_id")
);

-- CreateTable
CREATE TABLE "SalesPersonFunction" (
    "sales_person_function_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "function_id" BIGINT NOT NULL,

    CONSTRAINT "SalesPersonFunction_pkey" PRIMARY KEY ("sales_person_function_id")
);

-- CreateTable
CREATE TABLE "HierarchicalRelationship" (
    "relationship_id" BIGSERIAL NOT NULL,
    "sales_person_id" BIGINT NOT NULL,
    "supervisor_id" BIGINT NOT NULL,

    CONSTRAINT "HierarchicalRelationship_pkey" PRIMARY KEY ("relationship_id")
);

-- AddForeignKey
ALTER TABLE "LegalEntity" ADD CONSTRAINT "LegalEntity_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Individual" ADD CONSTRAINT "Individual_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesPersonFunction" ADD CONSTRAINT "SalesPersonFunction_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesPersonFunction" ADD CONSTRAINT "SalesPersonFunction_function_id_fkey" FOREIGN KEY ("function_id") REFERENCES "Function"("function_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HierarchicalRelationship" ADD CONSTRAINT "HierarchicalRelationship_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HierarchicalRelationship" ADD CONSTRAINT "HierarchicalRelationship_supervisor_id_fkey" FOREIGN KEY ("supervisor_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;
