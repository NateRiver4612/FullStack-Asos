import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  // Check request method
  if (req.method === "POST") {
    try {
      const cartItems = req.body;

      const transformedItems: Array<Stripe.Checkout.SessionCreateParams.LineItem> =
        cartItems.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [`http://${item.imageUrl}`],
            },
            unit_amount: item.price.current.value * 100,
          },
          quantity: item.quantity,
        }));

      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        line_items: transformedItems,
        success_url: "http://localhost:3000/men/cart/",
        cancel_url: "http://localhost:3000/",
      };

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
