export type User = {
  _id: string;
  vorname: string;
  nachname: string;
  email: string;
  gebracht_von_lvl1: string;
  supervisor: string;
  level2: string;
  level3: string;
  super_commission_permitted: boolean;
  street: string;
  location_city: string;
  IBAN: string;
};

export type RegisterPayload = Omit<User, "level2" | "level3" | "_id">;

export type UpdatePayload = {
  vorname?: string;
  nachname?: string;
  email?: string;
  gebracht_von_lvl1?: string;
  supervisor?: string;
  level2?: string;
  level3?: string;
  super_commission_permitted?: boolean;
  street?: string;
  location_city?: string;
  IBAN?: string;
};
