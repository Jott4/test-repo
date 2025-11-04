"use client";

import { useState, useId } from "react";
import Image from "next/image";

export default function LoginPage() {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md px-6 py-12">
        <div className="mb-8 flex justify-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
          <h1 className="mb-6 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Login
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor={emailId}
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-400 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label
                htmlFor={passwordId}
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Senha
              </label>
              <input
                id={passwordId}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-400 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full rounded-full bg-foreground px-5 py-3 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
