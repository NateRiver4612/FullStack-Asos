const Cart = require("../../models/cart.model");

const create_CartItem = async (
  id,
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
    id: id,
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
          id,
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
      const existCart = await Cart.findOne({ id: id, userId: userId });

      if (existCart) {
        //If yes

        return existCart;
      } else {
        //If no
        return create_CartItem(
          id,
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
  },
};
