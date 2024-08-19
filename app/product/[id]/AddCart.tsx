"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useState } from "react";

export default function AddCart({
  name,
  id,
  image,
  unit_amount,
  quantity,
}: AddCartType) {
    const cartStore = useCartStore();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () =>{
        cartStore.addProduct({id, name, quantity, unit_amount, image})
        setAdded(true);
    }
  return (
    <>
      <button onClick={handleAddToCart} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-blue-600">
        Add to Cart
      </button>
    </>
  );
}
