"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function NavBar({ user }: Session) {
  return (
      <nav className="flex justify-between items-center py-8">
        <h1>Styled</h1>
        <ul className="flex items-center gap-12">
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
                width={48}
                height={48}
                className="rounded-full"
              />
            </li>
          )}
        </ul>
      </nav>
  );
}
