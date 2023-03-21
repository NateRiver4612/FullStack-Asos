const Product = require("../models/product.model");
const axios = require("axios");

const create_LikeProduct = async (
  id,
  cur_price,
  pre_price,
  imageUrl,
  name,
  isSellingFast,
  link,
  colour,
  userID,
  userName
) => {
  const likeProduct = await Product.create({
    id: id,
    price: {
      current: {
        text: "$" + cur_price.toFixed(2).toString(),
        value: cur_price,
      },
      previous: {
        text: pre_price ? "$" + pre_price.toFixed(2).toString() : "",
        value: pre_price,
      },
    },
    imageUrl: imageUrl,
    name: name,
    isSellingFast: isSellingFast,
    link: link,
    colour: colour,
    likes: [
      {
        id: userID,
        displayName: userName,
        createdAt: new Date().toISOString(),
      },
    ],
    likeCount: 1,
  });

  return likeProduct;
};

module.exports = {
  Query: {
    getLikedProducts: async (parent) => {
      try {
        const likedProducts = await Product.find({
          likeCount: { $gte: 1 },
        }).exec();

        return likedProducts;
      } catch (error) {
        throw error;
      }
    },

    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    async likeProduct(
      parent,
      {
        input: {
          id,
          cur_price,
          pre_price,
          imageUrl,
          name,
          isSellingFast,
          colour,
          link,
          userID,
          userName,
        },
      },
      context
    ) {
      const existedProduct = await Product.findOne({ id: id }).exec();

      // Check if product existed ?
      if (existedProduct) {
        // Check if user liked product ?
        const likedUser = existedProduct.likes.find(
          (user) => user.id == userID
        );

        if (likedUser) {
          const res = await existedProduct.updateOne({
            likes: existedProduct.likes.filter((user) => user.id !== userID),
            // $pull: { likes: { $id: id } },
            $inc: { likeCount: -1 },
          });
        } else {
          const res = await existedProduct.updateOne({
            $push: {
              likes: {
                id: userID,
                displayName: userName,
                createdAt: new Date().toISOString(),
              },
            },
            $inc: { likeCount: 1 },
          });
        }

        return existedProduct;
      }
      const product = await create_LikeProduct(
        id,
        cur_price,
        pre_price,
        imageUrl,
        name,
        isSellingFast,
        link,
        colour,
        userID,
        userName
      );

      return product;
    },
  },
};
