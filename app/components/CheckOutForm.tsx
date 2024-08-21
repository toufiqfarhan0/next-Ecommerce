"use client";

import { useCartStore } from "@/store";
import formatPrice from "@/util/PriceFormat";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

export default function CheckOutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const cartStore = useCartStore();

  const toatalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount * item.quantity!;
  }, 0);

  const formattedPrice = formatPrice(toatalPrice);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          cartStore.setCheckout("success");
        }
        setIsLoading(false);
      });
  };
  return (
    <form className="text-gray-600" onSubmit={handleSubmit} id="payment-form">
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <h2 className="py-4 text-sm font-bold">Total: {formattedPrice}</h2>
      <button
        className={`py-2 mt-4 w-full bg-blue-700 rounded-md text-white disabled:opacity-25`}
        id="submit"
        disabled={isLoading || !stripe || !elements}
      >
        <span id="button-text">
          {isLoading ? <span>Processing 👀</span> : <span>Pay now</span>}
        </span>
      </button>
    </form>
  );
}
