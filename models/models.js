import mongoose from "mongoose";

const crudSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

export default mongoose.model("crud", crudSchema);
