export type Like = {
  id: String;
  displayName: String;
  createdAt: String;
};

export type Comment = {
  id: String;
  displayName: String;
  comment: String;
  createdAt: String;
};

export type Price_Format = {
  text: String;
  value: Number;
};

export type Price = {
  current: Price_Format;
  previous: Price_Format;
};

export type Product = {
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
};
