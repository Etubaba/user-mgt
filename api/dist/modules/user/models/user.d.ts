/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
declare const User: mongoose.Model<{
    vorname: string;
    nachname: string;
    email: string;
    password: string;
    super_commission_permitted: boolean;
    street: string;
    location_city: string;
    IBAN: string;
    gebracht_von_lvl1?: mongoose.Types.ObjectId;
    supervisorId?: mongoose.Types.ObjectId;
    level2?: mongoose.Types.ObjectId;
    level3?: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    vorname: string;
    nachname: string;
    email: string;
    password: string;
    super_commission_permitted: boolean;
    street: string;
    location_city: string;
    IBAN: string;
    gebracht_von_lvl1?: mongoose.Types.ObjectId;
    supervisorId?: mongoose.Types.ObjectId;
    level2?: mongoose.Types.ObjectId;
    level3?: mongoose.Types.ObjectId;
}> & {
    vorname: string;
    nachname: string;
    email: string;
    password: string;
    super_commission_permitted: boolean;
    street: string;
    location_city: string;
    IBAN: string;
    gebracht_von_lvl1?: mongoose.Types.ObjectId;
    supervisorId?: mongoose.Types.ObjectId;
    level2?: mongoose.Types.ObjectId;
    level3?: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    vorname: string;
    nachname: string;
    email: string;
    password: string;
    super_commission_permitted: boolean;
    street: string;
    location_city: string;
    IBAN: string;
    gebracht_von_lvl1?: mongoose.Types.ObjectId;
    supervisorId?: mongoose.Types.ObjectId;
    level2?: mongoose.Types.ObjectId;
    level3?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    vorname: string;
    nachname: string;
    email: string;
    password: string;
    super_commission_permitted: boolean;
    street: string;
    location_city: string;
    IBAN: string;
    gebracht_von_lvl1?: mongoose.Types.ObjectId;
    supervisorId?: mongoose.Types.ObjectId;
    level2?: mongoose.Types.ObjectId;
    level3?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    vorname: string;
    nachname: string;
    email: string;
    password: string;
    super_commission_permitted: boolean;
    street: string;
    location_city: string;
    IBAN: string;
    gebracht_von_lvl1?: mongoose.Types.ObjectId;
    supervisorId?: mongoose.Types.ObjectId;
    level2?: mongoose.Types.ObjectId;
    level3?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default User;
