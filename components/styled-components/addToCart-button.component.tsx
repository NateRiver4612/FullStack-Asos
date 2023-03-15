import { useMutation } from "@apollo/client";
import React, { Fragment } from "react";
import { useAuth } from "../../context/authUserContext";
import {
  addToCart,
  selectCartItems,
} from "../../redux/features/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Like } from "../../types";
import { ADD_TO_CART, GET_CART_ITEMS } from "../../utils/graphQl.utils";

const AddToCart_Button = ({ product }) => {
  const { price, imageUrl, name, id, colour, link } = product;

  const { authUser } = useAuth();

  const dispatch = useAppDispatch();

  const [addCartItem] = useMutation(ADD_TO_CART, {
    refetchQueries: [{ query: GET_CART_ITEMS }],
  });

  const cartItems = useAppSelector(selectCartItems);

  const isAddToCart =
    cartItems &&
    !!cartItems.find(
      (product: { productId: String; likes: Like[] }) => product.productId == id
    );

  const handleAddToCart = async () => {
    const input = {
      value: {
        productId: id,
        userId: authUser.id,
        name: name,
        link: link,
        imageUrl: imageUrl,
        cur_price: parseFloat(price.current.value),
        pre_price: parseFloat(price.previous.value),
        quantity: 1,
        colour: colour,
        createdAt: new Date(Date.now()).toDateString(),
      },
    };

    dispatch(addToCart(input.value));

    await addCartItem({ variables: { input: input.value } });
  };

  return (
    <Fragment>
      {isAddToCart ? (
        <button
          className="uppercase border-b-[1px] transition-all duration-300 border-gray-200 font-semibold text-gray-400 hover:text-gray-300 tracking-wide  py-2 my-2 "
          onClick={() => {}}
        >
          Go to cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="rounded-[1px] uppercase transition-all duration-300 bg-gray-400 hover:bg-gray-600 font-semibold tracking-wide text-gray-300 py-2 my-2 "
        >
          move to bag
        </button>
      )}
    </Fragment>
  );
};

export default AddToCart_Button;
