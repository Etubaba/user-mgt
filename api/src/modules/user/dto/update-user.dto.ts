import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  vorname?: string;
  @IsOptional()
  @IsString()
  nachname?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsOptional()
  @IsString()
  gebracht_von_lvl1?: string;
  @IsBoolean()
  @IsOptional()
  super_commission_permitted?: boolean;
  @IsOptional()
  @IsString()
  street?: string;
  @IsOptional()
  @IsString()
  location_city?: string;
  @IsOptional()
  @IsString()
  IBAN?: string;
}
