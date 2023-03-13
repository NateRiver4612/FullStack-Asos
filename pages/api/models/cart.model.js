const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    id: String,
    userId: String,
    price: {
      current: {
        text: String,
        value: Number,
      },
      previous: {
        text: String,
        value: Number,
      },
    },
    imageUrl: String,
    name: String,
    link: String,
    quantity: Number,
    colour: String,
    createdAt: Date,
  },
  { versionKey: false }
);

module.exports = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
