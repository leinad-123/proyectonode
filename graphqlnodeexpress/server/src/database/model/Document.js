const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    userId: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.models && mongoose.models.Document
  ? mongoose.models.Document
  : mongoose.model("Document", DocumentSchema);
