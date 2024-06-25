export class Individual {
    individual_id: bigint;
    sales_person_id: bigint;
    full_name: string;
    pronoun?: string;
    social_name?: string;
    birth_date?: Date;
    gender?: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    active: boolean;
    b_account_id?: bigint;
  }
  