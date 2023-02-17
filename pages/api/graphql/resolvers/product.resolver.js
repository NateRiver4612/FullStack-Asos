const Product = require("../../models/product.model");
const axios = require("axios");

const create_LikeProduct = async (
  id,
  cur_price,
  pre_price,
  imageUrl,
  name,
  isSellingFast,
  link,
  userID,
  userName
) => {
  const likeProduct = new Product({
    id: id,
    price: {
      current: {
        text: "$" + cur_price.toString(),
        value: cur_price,
      },
      previous: {
        text: pre_price ? "$" + pre_price.toString() : "",
        value: pre_price,
      },
    },
    imageUrl: imageUrl,
    name: name,
    isSellingFast: isSellingFast,
    link: link,
    likes: [
      {
        id: userID,
        displayName: userName,
        createdAt: new Date().toISOString(),
      },
    ],
    likeCount: 1,
  });

  var product = await likeProduct.save();

  return product;
};

module.exports = {
  Query: {
    getLikedProducts: async () => {
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

      const product = await newProduct.save();

      return product;
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
      const existedProduct = (await Product.find({ id }))[0];

      // Check if product existed ?
      if (existedProduct) {
        // Check if user liked product ?
        const likedUser = existedProduct.likes.find(
          (user) => user.id == userID
        );

        if (likedUser) {
          existedProduct.likes = existedProduct.likes.filter(
            (user) => user.id !== userID
          );
          existedProduct.likeCount -= 1;
        } else {
          existedProduct.likes.push({
            id: userID,
            displayName: userName,
            createdAt: new Date().toISOString(),
          });
          existedProduct.likeCount += 1;
        }

        await existedProduct.save();

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
        userID,
        userName
      );

      return product;
    },
  },
};
