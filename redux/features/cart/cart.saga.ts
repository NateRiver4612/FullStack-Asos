import { call, takeEvery, put, all, takeLatest } from "redux-saga/effects";
import { addToCart } from "./cart.slice";
import { addToCart_type, cartActions } from "./cart.actions";
import { removeWishItem } from "../wish/wish.slice";

export function* addToCartAsync({ payload: { cartItem, authUser } }: any) {
  try {
    yield put(addToCart(cartItem));
    yield put(removeWishItem(authUser.id));
  } catch (error) {}
}

export function* onAddToCartAsync() {
  yield takeLatest(cartActions.ADD_TO_CART, addToCartAsync);
}

export function* cartSaga() {
  yield all([call(onAddToCartAsync)]);
}
