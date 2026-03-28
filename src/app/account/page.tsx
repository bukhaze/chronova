"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-primary animate-spin"></div>
        </main>
        <Footer />
        <BottomNav />
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="pt-24 px-6 max-w-md mx-auto flex-grow w-full pb-32">
        {/* Profile Info Section */}
        <section className="flex flex-col items-center mb-12 text-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full p-[1px] bg-gradient-to-b from-primary to-transparent relative z-10">
              <img
                alt="User Profile"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 bg-surface-container"
                src={user?.image || "https://api.dicebear.com/7.x/notionists/svg?seed=VIP&backgroundColor=f1f5f9"}
              />
              <div className="absolute bottom-0 right-0 z-20 bg-primary text-on-primary p-1.5 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <span className="material-symbols-outlined text-sm fill-1">edit</span>
              </div>
            </div>
            
          </div>
          <h2 className="font-headline text-3xl italic text-on-surface mb-1">{user?.name}</h2>
          <p className="font-body text-xs tracking-widest text-on-surface-variant uppercase opacity-60 italic">Elite Member since 2022</p>
          <p className="font-label text-[10px] tracking-widest text-primary mt-2">{user?.email}</p>
        </section>

        {/* Active Tracking */}
        <section className="mb-12">
          <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-6 font-bold">Current Journey</h3>
          <div className="bg-surface-container-high p-6 rounded-none relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="font-headline italic text-lg text-white leading-tight">The Nocturne Chronograph</p>
                <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Order #CH-88291</p>
              </div>
              <span className="material-symbols-outlined text-primary">local_shipping</span>
            </div>
            <div className="w-full bg-surface-container h-[2px] mb-4 relative z-10">
              <div className="bg-primary h-full w-3/4"></div>
            </div>
            <div className="flex justify-between items-center relative z-10">
              <span className="text-[10px] font-body text-on-surface-variant uppercase tracking-tighter">In Transit — Zurich Hub</span>
              <button className="text-[10px] font-label text-primary uppercase border-b border-primary/30 tracking-widest pb-1 font-bold">Details</button>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">watch</span>
            </div>
          </div>
        </section>

        {/* Menu Links */}
        <section className="mb-12 space-y-2">
          <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-4 font-bold">Account Portfolio</h3>
          {[
            { icon: "history", label: "Order History" },
            { icon: "favorite", label: "Curated Wishlist" },
            { icon: "location_on", label: "Saved Addresses" },
            { icon: "settings", label: "Preferences & Security" },
          ].map((item, index) => (
            <button key={index} className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container transition-colors group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">{item.icon}</span>
                <span className="font-body text-sm tracking-wide text-on-surface">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-xs text-on-surface-variant">chevron_right</span>
            </button>
          ))}
        </section>

        {/* Logout Section */}
        <section className="pt-4 border-t border-outline-variant/10">
          <button 
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center justify-center gap-3 py-4 text-error font-label text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-error/5 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            Sign Out from Vault
          </button>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
