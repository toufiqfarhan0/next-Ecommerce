import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { authOptions } from "./auth/[...nextauth]/route";
import { connect } from "http2";
import { Amarante } from "next/font/google";
import { AddCartType } from "@/types/AddCartType";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

const calculateOrderAmount = (items: AddCartType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.unit_amount * item.quantity!;
  }, 0);
  return totalPrice;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //get user
  const userSession = await getServerSession(req, res, authOptions);
  if (!userSession?.user) {
    res.status(403).json({ message: "Your not logged in" });
    return;
  }
  //extract the data from the user
  const { items, payment_intent_id } = req.body;

  //create order data
  const orderData = {
    user: { connect: { id: userSession.user.id } },
    amount: calculateOrderAmount(items),
    currency: "usd",
    status: "pending",
    paymentIntentId: payment_intent_id,
    products: {
      create: items.map((item) => ({
        name: item.name,
        description: item.description,
        unit_amount: item.unit_amount,
        quantity: item.quantity,
      })),
    },
  };

  res.status(200).json({ userSession });
  return;
  // data necessary for the order
}
