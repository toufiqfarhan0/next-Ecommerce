"use client";

import { useCartStore } from "@/store";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { AiFillShopping } from "react-icons/ai";

export default function NavBar({ user }: Session) {
  const cartStore = useCartStore();
  return (
    <nav className="flex justify-between items-center mb-12 p-2 border-b">
      <Link href={"/"}>
        <h1>Styled</h1>
      </Link>
      <ul className="flex items-center gap-7">
        <li className="flex items-center text-3xl relative cursor-pointer">
          <AiFillShopping />
          <span className="bg-red-600 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </span>
        </li>
        {!user && (
          <li className="bg-blue-600 text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        {user && (
          <li>
            <Image
              src={user?.image || ""}
              alt={user.name || ""}
              width={36}
              height={36}
              className="rounded-full"
            />
          </li>
        )}
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
}
