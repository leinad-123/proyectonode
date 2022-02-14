const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.models && mongoose.models.User
  ? mongoose.models.User
  : mongoose.model("User", UserSchema);
