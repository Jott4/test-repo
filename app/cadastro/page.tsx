"use client";

import { useState, useId } from "react";
import Link from "next/link";

export default function CadastroPage() {
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setIsLoading(true);
    
    // Simular requisição de cadastro
    console.log("Cadastro:", { email, password });
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Cadastro
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Crie sua conta para começar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

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
              minLength={6}
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              placeholder="••••••••"
            />
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Mínimo de 6 caracteres
            </p>
          </div>

          <div>
            <label
              htmlFor={confirmPasswordId}
              className="block text-sm font-medium text-black dark:text-zinc-50"
            >
              Confirmar Senha
            </label>
            <input
              id={confirmPasswordId}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 dark:focus:ring-zinc-500"
          >
            {isLoading ? "Criando conta..." : "Criar conta"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="font-medium text-black hover:underline dark:text-zinc-50"
            >
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
