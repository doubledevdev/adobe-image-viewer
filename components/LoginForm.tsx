"use client";

import { useState } from "react";
import { handleClick } from "@/components/click";
import { theme } from "@/components/theme";
import { useRouter } from "next/navigation"


export default function LoginForm({
  selectedOption,
}: {
  selectedOption: (typeof theme)[number];
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter();


  return (
    <form
      className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick(email,password);
        setEmail("");
        setPassword("");

      // 4. Navigate to the new page
      router.push("/view-image");
      }}
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
         <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <button
        type="submit"
        className={`w-full rounded-md py-2 font-medium transition ${selectedOption.buttonClassName}`}
      >
        Login
      </button>
    </form>
  );
}
