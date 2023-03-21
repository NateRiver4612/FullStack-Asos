const Cart = require("../models/cart.model");

const create_CartItem = async (
  productId,
  cur_price,
  pre_price,
  imageUrl,
  name,
  link,
  quantity,
  colour,
  userId,
  createdAt
) => {
  const cartItem = await Cart.create({
    productId: productId,
    userId: userId,
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
    link: link,
    quantity: quantity,
    colour: colour,
    total: cur_price,
    createdAt: createdAt,
  });

  return cartItem;
};

module.exports = {
  Query: {
    getCart: async (parent, { userId }, context) => {
      try {
        const cartItems = await Cart.find({
          userId: userId,
        });

        return cartItems;
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    async addToCart(
      parent,
      {
        input: {
          productId,
          cur_price,
          pre_price,
          imageUrl,
          name,
          link,
          quantity,
          colour,
          userId,
          createdAt,
        },
      },
      context
    ) {
      // Check if cart is exist
      const existCart = await Cart.findOne({
        productId: productId,
        userId: userId,
      });

      if (existCart) {
        //If yes

        return existCart;
      } else {
        //If no
        return create_CartItem(
          productId,
          cur_price,
          pre_price,
          imageUrl,
          name,
          link,
          quantity,
          colour,
          userId,
          createdAt
        );
      }
    },

    async removeFromCart(parent, { input: { userId, productId }, context }) {
      const deleteItem = await Cart.findOneAndDelete({
        userId: userId,
        productId: productId,
      });

      return deleteItem;
    },

    async updateQuantity(
      parent,
      { input: { userId, productId, quantity }, context }
    ) {
      const existItem = await Cart.findOne({
        userId: userId,
        productId: productId,
      });

      const updateItem = await Cart.findOneAndUpdate(
        {
          userId: userId,
          productId: productId,
        },
        {
          quantity: quantity,
          total: existItem.price.current.value * quantity,
        }
      );

      return updateItem;
    },
  },
};
