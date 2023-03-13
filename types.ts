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
  id: String;
  userId: String;
  name: String;
  link: String;
  imageUrl: String;
  cur_price: Number;
  pre_price: Number;
  quantity: Number;
  colour: String;
  createdAt: String;
}
