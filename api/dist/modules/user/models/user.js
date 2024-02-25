"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    vorname: { type: String, required: true },
    nachname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gebracht_von_lvl1: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    supervisorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    level2: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    level3: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    super_commission_permitted: { type: Boolean, required: true },
    street: { type: String, required: true },
    location_city: { type: String, required: true },
    IBAN: { type: String, required: true },
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map