const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Price_Format {
    text: String!
    value: Float
  }

  type Price {
    current: Price_Format!
    previous: Price_Format!
  }

  type User {
    id: String!
    displayName: String!
  }

  type Comment {
    id: String!
    displayName: String!
    comment: String!
    createdAt: String!
  }

  type Like {
    id: String!
    displayName: String!
    createdAt: String!
  }

  type Product {
    id: String!
    price: Price!
    imageUrl: String!
    name: String!
    isSellingFast: Boolean
    link: String!
    colour: String
    likes: [Like]
    comments: [Comment]
    likeCount: Int
    commentCount: Int
  }

  type CartItem {
    id: String!
    userId: String!
    price: Price!
    imageUrl: String!
    name: String!
    link: String!
    quantity: Int!
    colour: String
    createdAt: String
  }

  input CreateProduct_Input {
    id: String!
    cur_price: Float!
    pre_price: Float!
    imageUrl: String!
    name: String!
    isSellingFast: Boolean!
    link: String
  }

  input AddToCart_Input {
    id: String!
    userId: String!
    cur_price: Float!
    pre_price: Float
    imageUrl: String!
    name: String!
    link: String!
    quantity: Int!
    colour: String
    createdAt: String
  }

  input LikeProduct_Input {
    id: String!
    cur_price: Float!
    pre_price: Float
    imageUrl: String!
    name: String!
    isSellingFast: Boolean
    link: String!
    colour: String
    userID: String!
    userName: String!
  }

  type Account {
    id: ID!
    login: String!
    avatar_url: String!
  }

  type Query {
    getUsers: [Account]
    getLikedProducts: [Product]
    getCart(userId: String!): [CartItem]
  }

  type Mutation {
    createProduct(input: CreateProduct_Input!): Product!
    addToCart(input: AddToCart_Input!): CartItem!
    likeProduct(input: LikeProduct_Input!): Product!
  }
`;

module.exports = typeDefs;
