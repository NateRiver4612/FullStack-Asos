export interface Like {
  id: String;
  displayName: String;
  createdAt: String;
}

export interface Comment {
  id: String;
  displayName: String;
  comment: String;
  createdAt: String;
}

export interface Price_Format {
  text: String;
  value: Number;
}

export interface Price {
  current: Price_Format;
  previous: Price_Format;
}

export interface Product {
  id: String;
  price: Price;
  imageUrl: String;
  name: String;
  isSellingFast: Boolean;
  link: String;
  colour: String;
  likes: [Like];
  comments: [Comment];
  likeCount: Number;
  commentCount: Number;
}

export interface Cart {
  productId: string;
  userId: string;
  name: string;
  link: string;
  imageUrl: string;
  cur_price: number;
  pre_price: number;
  quantity: number;
  colour: string;
  createdAt: string;
  total: number;
}
