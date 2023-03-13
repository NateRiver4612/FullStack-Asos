const productResolvers = require("./product.resolver");
const cartResolvers = require("./cart.resolver");

module.exports = {
  Product: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },

  Query: {
    ...productResolvers.Query,
    ...cartResolvers.Query,
  },

  Mutation: {
    ...productResolvers.Mutation,
    ...cartResolvers.Mutation,
  },
};
