const productResolvers = require("./product.resolver");

module.exports = {
  Query: {
    ...productResolvers.Query,
  },

  Mutation: {
    ...productResolvers.Mutation,
  },
};
