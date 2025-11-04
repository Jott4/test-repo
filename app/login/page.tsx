"use client";

import { useState, useId } from "react";
import Link from "next/link";

export default function LoginPage() {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular requisição de autenticação
    console.log("Login:", { email, password });
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Login
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Entre com suas credenciais
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor={emailId}
              className="block text-sm font-medium text-black dark:text-zinc-50"
            >
              Email
            </label>
            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor={passwordId}
              className="block text-sm font-medium text-black dark:text-zinc-50"
            >
              Senha
            </label>
            <input
              id={passwordId}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 dark:focus:ring-zinc-500"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Não tem uma conta?{" "}
            <Link
              href="/cadastro"
              className="font-medium text-black hover:underline dark:text-zinc-50"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
