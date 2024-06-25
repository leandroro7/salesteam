export class Contact {
    contact_id: bigint;
    sales_person_id: bigint;
    contact_type: string;
    contact_value: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    active: boolean;
    b_account_id?: bigint;
  }
  