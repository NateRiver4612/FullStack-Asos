const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    id: String,
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
    isSellingFast: Boolean,
    link: String,
    colour: String,
    likes: [
      {
        id: String,
        displayName: String,
        createdAt: String,
      },
    ],
    comments: [
      {
        id: String,
        displayName: String,
        comment: String,
        createdAt: String,
      },
    ],
    likeCount: Number,
    commentCount: Number,
  },
  { versionKey: false }
);

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
