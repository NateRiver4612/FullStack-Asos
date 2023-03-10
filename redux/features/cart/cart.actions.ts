import { Cart } from "../../../types";
import { ActionWithPayload } from "../../../utils/reducer.type";

export const cartActions = {
  ADD_TO_CART: "ADD_TO_CART",
};

export type addToCart_type = ActionWithPayload<"ADD_TO_CART", Cart>;
