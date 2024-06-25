export class Address {
  address_id: bigint;
  sales_person_id: bigint;
  address_type: string;
  number: number;
  postal_code: string;
  complement?: string;
  street: string;
  neighborhood?: string;
  city: string;
  state: string;
  country: string;
  state_geocode?: string;
  city_geocode?: string;
  address_geocode?: string;
  latitude?: string;
  longitude?: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;
  b_account_id?: bigint;
  active: boolean;
}
