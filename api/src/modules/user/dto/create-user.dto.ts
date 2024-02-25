import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  vorname: string;
  @IsNotEmpty()
  @IsString()
  nachname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(8, { message: "Password should be minimum of 8 characters" })
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  gebracht_von_lvl1?: string;

  @IsOptional()
  @IsString()
  supervisor?: string;

  @IsBoolean()
  @IsNotEmpty()
  super_commission_permitted: boolean;

  @IsNotEmpty()
  @IsString()
  street: string;
  @IsNotEmpty()
  @IsString()
  location_city: string;
  @IsNotEmpty()
  @IsString()
  IBAN: string;
}
