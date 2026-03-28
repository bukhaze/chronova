"use client";

import React, { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/account";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    if (res?.error) {
      setError("Invalid credentials. Please try again.");
      setLoading(false);
    } else if (res?.url) {
      router.push(res.url);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <h1 className="font-headline italic text-4xl leading-tight mb-2">Client Access</h1>
        <p className="font-body text-sm text-on-surface-variant font-light tracking-wide">Enter your elite credentials.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-2">Email Address</label>
          <input
            type="email"
            name="email"
            defaultValue="client@chronova.com"
            required
            className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30"
            placeholder="Ex. julian@vance.com"
          />
        </div>
        
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-2">Password</label>
          <input
            type="password"
            name="password"
            defaultValue="luxury123"
            required
            className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="text-error mt-2 font-label text-xs tracking-wide">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-gold-gradient py-4 flex items-center justify-center text-on-primary font-label uppercase tracking-[0.2em] font-bold text-xs mt-8 shadow-xl shadow-primary/10 active:scale-95 transition-all outline-none"
        >
          {loading ? "Authenticating..." : "Access Account"}
        </button>

        <p className="text-center mt-6 font-body text-xs text-on-surface-variant font-light">
          Not a member? <Link href="#" className="underline decoration-primary/50 hover:text-primary transition-colors">Request an invite.</Link>
        </p>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="absolute inset-0 bg-surface -z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      <main className="flex-grow flex items-center justify-center pt-24 pb-32 px-6">
        <Suspense fallback={<div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-primary animate-spin"></div>}>
          <LoginForm />
        </Suspense>
      </main>
    </div>
  );
}
