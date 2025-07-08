import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { cartItems } = await req.json();

    // Define fallback origin
    const origin = req.headers.origin 

    // Map cart items to Stripe line_items
    const lineItems = cartItems.map((item) => {
      // Extract the first image URL
      const image = item.image?.[0]?.asset?._ref || "";
      const imageUrl = image
        .replace("image-", "https://cdn.sanity.io/images/ulbs7z7d/production/")
        .replace("-webp", ".webp"); // Replace Sanity ref format with actual image URL

      return {
        price_data: {
          currency: "ngn", // Set your currency
          product_data: {
            name: item.name,
            description: item.details,
            images: [imageUrl], // Add the resolved image URL
          },
          unit_amount: item.price * 100, // Stripe expects amount in cents
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    });

    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1QlqzJJaI65CESUZJV4qLfxe" },
        { shipping_rate: "shr_1QlsJ1JaI65CESUZGDP9BEyf" },
      ],
      line_items: lineItems,
      success_url: `${origin}/?success`,
      cancel_url: `${origin}/?canceled=true`,
    };

    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
