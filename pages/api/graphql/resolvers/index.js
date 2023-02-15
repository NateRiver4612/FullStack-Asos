const productResolvers = require("./product.resolver");

module.exports = {
  Product: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },

  Query: {
    ...productResolvers.Query,
  },

  Mutation: {
    ...productResolvers.Mutation,
  },
};
