import { SalesPerson } from '../seles-persons/sales-person.model';


export class Document {
    document_id: bigint;
    sales_person_id: bigint;
    document_number: string;
    issue_date?: Date;
    expiration_date?: Date;
    issuing_authority?: string;
    document_type?: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    active: boolean;
    b_account_id?: bigint;
  }
  