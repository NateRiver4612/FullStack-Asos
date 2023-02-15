const Product = require("../../models/product.model");
const axios = require("axios");
const clientPromise = require("../../../../utils/mongodb");

module.exports = {
  Query: {
    getAccounts: async () => {
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
    createProduct: async (
      parent,
      {
        input: {
          id,
          cur_price,
          pre_price,
          imageUrl,
          name,
          link,
          isSellingFast,
        },
      },
      context
    ) => {
      const newProduct = new Product({
        id,
        price: {
          current: {
            text: "$" + cur_price.toString(),
            value: cur_price,
          },
          previous: {
            text: "$" + pre_price.toString(),
            value: pre_price,
          },
        },
        link,
        imageUrl,
        name,
        isSellingFast,
      });

      await clientPromise;

      const product = await newProduct.save();

      return newProduct;
    },

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
          link,
          userID,
          userName,
        },
      },
      context
    ) {
      // Check if product existed ?
      // Check if user liked product ?

      //
      const likeProduct = new Product({
        id,
        price: {
          current: {
            text: "$" + cur_price.toString(),
            value: cur_price,
          },
          previous: {
            text: "$" + pre_price.toString(),
            value: pre_price,
          },
        },
        imageUrl,
        name,
        isSellingFast,
        link,
        likes: [
          {
            id: userID,
            displayName: userName,
            createdAt: new Date().toISOString(),
          },
        ],
      });

      // var product = await likeProduct.save();

      console.log(likeProduct);

      return likeProduct;
    },
  },
};
