"use client"

import { useCartStore } from "@/store"
import { loadStripe } from "@stripe/stripe-js"
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckOut() {
    const cartStore = useCartStore();
    const [clientSecret, setClientSecret] = useState(""); 
    
    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                items: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent,
            })
        })
    },[])
}