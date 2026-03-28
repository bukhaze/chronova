"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { useCart } from '@/store/useCart';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-24 pb-32 px-6 flex-grow flex flex-col items-center justify-center text-center">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-6">shopping_bag</span>
          <h1 className="font-headline italic text-3xl text-on-surface mb-3">Your Collection is Empty</h1>
          <p className="text-sm text-on-surface-variant mb-8">Discover our curated selection of horological masterpieces.</p>
          <Link href="/shop" className="btn-gold-gradient text-on-primary px-10 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">
            Explore Collection
          </Link>
        </main>
        <Footer />
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-lg mx-auto flex-grow w-full">
        <header className="mb-12">
          <h1 className="font-headline italic text-4xl text-on-surface mb-2">Your Selection</h1>
          <p className="font-body text-sm tracking-widest text-on-surface-variant uppercase opacity-70">
            {items.length} {items.length === 1 ? 'piece' : 'pieces'} curated
          </p>
        </header>

        <div className="space-y-8 mb-16">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 items-start">
              <div className="w-24 h-32 bg-surface-container-high overflow-hidden flex-shrink-0">
                <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline italic text-lg leading-tight">{item.name}</h3>
                    <p className="font-label text-[10px] tracking-widest text-primary uppercase mt-1">{item.brand}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-on-surface-variant/40 hover:text-error transition-colors">
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center bg-surface-container-low border border-outline-variant/10 px-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="px-3 font-body text-sm">{String(item.quantity).padStart(2, '0')}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  <span className="font-headline text-lg text-primary">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <section className="p-8 bg-surface-container-lowest relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between font-body text-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span>${totalPrice().toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between font-body text-sm text-on-surface-variant">
              <span>Shipping</span>
              <span>Complimentary</span>
            </div>
            <div className="pt-4 flex justify-between font-headline text-2xl text-primary border-t border-outline-variant/10">
              <span className="italic">Total</span>
              <span>${totalPrice().toLocaleString()}.00</span>
            </div>
          </div>
          <Link href="/checkout" className="block w-full py-5 btn-gold-gradient text-on-primary font-label font-bold text-xs tracking-[0.2em] uppercase text-center active:scale-95 transition-transform">
            Proceed to Checkout
          </Link>
          <button onClick={clearCart} className="w-full mt-4 py-3 text-on-surface-variant/40 font-label text-[10px] uppercase tracking-widest hover:text-error transition-colors">
            Clear Selection
          </button>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
