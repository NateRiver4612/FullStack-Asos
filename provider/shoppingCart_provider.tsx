import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
import * as config from "../utils/stripe/stripe-configs";

const Cart_Provider = ({ children }: { children: ReactNode }) => (
  <CartProvider
    shouldPersist={false}
    cartMode="checkout-session"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
    currency={config.CURRENCY}
  >
    <>{children}</>
  </CartProvider>
);

export default Cart_Provider;
