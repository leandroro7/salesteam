export class LegalEntity {
    legal_entity_id: bigint;
    sales_person_id: bigint;
    trade_name: string;
    corporate_name?: string;
    opening_date?: Date;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    active: boolean;
    b_account_id?: bigint;
  }
  