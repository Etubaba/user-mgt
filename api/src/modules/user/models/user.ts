import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  vorname: { type: String, required: true }, // first name
  nachname: { type: String, required: true }, // last name
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gebracht_von_lvl1: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // lvl1 (brought by lvl1)
  supervisorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  }, //
  level2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  level3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  super_commission_permitted: { type: Boolean, required: true },
  street: { type: String, required: true },
  location_city: { type: String, required: true },

  IBAN: { type: String, required: true }, // International Bank Account Number
});

const User = mongoose.model("User", userSchema);
export default User;
