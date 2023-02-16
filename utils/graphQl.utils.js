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
