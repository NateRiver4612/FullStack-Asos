import { gql } from "@apollo/client";

export const GET_LIKED_PRODUCTS = gql`
  query GetLikedProducts {
    getLikedProducts {
      id
      commentCount
      imageUrl
      isSellingFast
      likeCount
      likes {
        id
        displayName
        createdAt
      }
      link
      name
      colour
      price {
        current {
          value
          text
        }
        previous {
          value
          text
        }
      }
    }
  }
`;

export const GET_CART_ITEMS = gql`
  query GetCart($userId: String!) {
    getCart(userId: $userId) {
      colour
      createdAt
      productId
      imageUrl
      link
      name
      price {
        previous {
          text
          value
        }
        current {
          value
          text
        }
      }
      quantity
      userId
    }
  }
`;

export const LIKE_PRODUCT = gql`
  mutation LikeProduct($input: LikeProduct_Input!) {
    likeProduct(input: $input) {
      id
      likes {
        displayName
        id
        createdAt
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($input: AddToCart_Input!) {
    addToCart(input: $input) {
      colour
      createdAt
      productId
      imageUrl
      link
      name
      price {
        previous {
          text
          value
        }
        current {
          value
          text
        }
      }
      userId
      quantity
    }
  }
`;
