import { call, all } from "typed-redux-saga";
import { cartSaga } from "./features/cart/cart.saga";

export default function* rootSaga() {
  yield all([call(cartSaga)]);
}
