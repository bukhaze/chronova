import React from 'react';
import Link from 'next/link';

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      {/* TopAppBar (Transactional Context) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface/80 glass-nav border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <Link href="/shop" className="text-on-surface-variant/70 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">close</span>
          </Link>
        </div>
        <span className="text-2xl font-headline italic font-bold text-primary tracking-tighter">CHRONOVA</span>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary fill-1">lock</span>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 max-w-lg mx-auto flex-grow w-full">
        {/* Order Header */}
        <header className="mb-12">
          <h1 className="font-headline italic text-4xl text-on-surface mb-2">Review Order</h1>
          <p className="font-body text-sm tracking-widest text-on-surface-variant uppercase opacity-70">Secured Checkout Session</p>
        </header>

        {/* Cart Items */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-headline text-xl italic">Your Selection</h2>
            <Link href="/cart" className="font-label text-xs tracking-widest uppercase text-primary">Edit Cart</Link>
          </div>
          <div className="space-y-8 text-on-surface">
            {/* Item 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-24 h-32 bg-surface-container-high relative overflow-hidden flex-shrink-0">
                <img
                  alt="Aeterna Chronograph"
                  className="w-full h-full object-cover grayscale contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSL1AGtiKm3a9TS9nPQAiF14rE2czpF6xaATgU64K3uujy0yyYKgXNbiaVhyF_Nj5-Ibgs6U27nH0krQjVsBbTYVy6A784vG209E7Xv180qSfc0QMEnBYoW94BfrqNJoJcsKlh6amUfmMGPUzBdGLFDwn4GqFaJD3j4oPnkd8LlvGnn4GOvst8AfIqSgHXW9P9QduDkrGJxygchQOdB1gDni0NmlGkEtMrymRoh8nGy4QnWyOa1eh_NIImPXvr9kRIwHbBvKIWM0Y5"
                />
              </div>
              <div className="flex-grow flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-headline italic text-lg leading-tight">Aeterna Chronograph</h3>
                  <p className="font-label text-[10px] tracking-tighter text-on-surface-variant uppercase mt-1">Ref. 9283-G / Rose Gold</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-on-surface">
                  <span className="font-body text-sm font-light">Quantity: 1</span>
                  <span className="font-headline text-lg text-primary">$12,400</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Form */}
        <section className="mb-16">
          <h2 className="font-headline text-xl italic mb-8">Shipping Information</h2>
          <div className="grid grid-cols-1 gap-10">
            <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="Full Name" type="text" />
            <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="Email Address" type="email" />
            <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="Shipping Address" type="text" />
            <div className="grid grid-cols-2 gap-8">
              <input className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="City" type="text" />
              <input className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="Postal Code" type="text" />
            </div>
          </div>
        </section>

        {/* Delivery Method */}
        <section className="mb-16">
          <h2 className="font-headline text-xl italic mb-6">Delivery Method</h2>
          <div className="space-y-4">
            <div className="p-6 bg-surface-container-low border border-primary/20 flex justify-between items-center">
              <div>
                <p className="font-label text-sm font-semibold text-primary">EXPRESS CONCIERGE</p>
                <p className="font-body text-xs text-on-surface-variant">White-glove delivery in 24-48 hours</p>
              </div>
              <span className="font-headline text-primary">Free</span>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/10 flex justify-between items-center opacity-60">
              <div>
                <p className="font-label text-sm text-on-surface">STANDARD SECURE</p>
                <p className="font-body text-xs text-on-surface-variant">Insured shipping (3-5 business days)</p>
              </div>
              <span className="font-headline text-on-surface">Free</span>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="mb-16">
          <h2 className="font-headline text-xl italic mb-6">Payment Method</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-6 bg-surface-container-high border border-primary/40 rounded-none">
              <span className="material-symbols-outlined mb-2 text-primary">credit_card</span>
              <span className="font-label text-[10px] tracking-widest uppercase">Card</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-surface-container-low border border-outline-variant/20 rounded-none hover:border-primary/20 transition-all">
              <span className="material-symbols-outlined mb-2 text-on-surface-variant">account_balance</span>
              <span className="font-label text-[10px] tracking-widest uppercase">Wire Transfer</span>
            </button>
          </div>
          <div className="mt-8 space-y-6">
            <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="Card Number" type="text" />
            <div className="grid grid-cols-2 gap-8">
              <input className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="MM / YY" type="text" />
              <input className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-light placeholder:text-on-surface-variant/40" placeholder="CVV" type="password" />
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="mt-20 p-8 bg-surface-container-lowest relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="space-y-4 mb-10">
            <div className="flex justify-between font-body text-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span>$12,400.00</span>
            </div>
            <div className="flex justify-between font-body text-sm text-on-surface-variant">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-body text-sm text-on-surface-variant">
              <span>Tax (Estimated)</span>
              <span>$992.00</span>
            </div>
            <div className="pt-4 flex justify-between font-headline text-2xl text-primary border-t border-outline-variant/10 font-bold">
              <span className="italic">Total</span>
              <span>$13,392.00</span>
            </div>
          </div>
          <button className="w-full py-5 btn-gold-gradient text-on-primary font-label font-bold text-xs tracking-[0.2em] uppercase rounded-none shadow-xl shadow-primary/10 active:scale-95 transition-transform">
            Place Secure Order
          </button>
          <div className="mt-6 flex items-center justify-center gap-2 opacity-40">
            <span className="material-symbols-outlined text-xs">encrypted</span>
            <span className="font-body text-[10px] tracking-widest uppercase">SSL Encrypted Transaction</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-20 pb-24 px-8 bg-surface-container-lowest flex flex-col items-center text-center gap-12 mt-20">
        <span className="font-headline text-lg text-primary tracking-widest font-bold italic">CHRONOVA</span>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="#" className="font-label text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Privacy Policy</Link>
          <Link href="#" className="font-label text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Terms of Service</Link>
          <Link href="#" className="font-label text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Shipping & Returns</Link>
          <Link href="#" className="font-label text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Sustainability</Link>
        </div>
        <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/20 mt-4 leading-relaxed">
          © 2024 CHRONOVA HOROLOGY. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default Checkout;
