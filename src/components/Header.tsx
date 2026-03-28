"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/store/useCart';

const Header = () => {
  const { totalItems } = useCart();
  const count = totalItems();

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-surface z-50 glass-nav border-b border-outline-variant/10">
      <div className="flex items-center">
        <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
      </div>
      
      <Link href="/" className="text-2xl font-headline italic font-bold text-primary tracking-tighter uppercase">
        CHRONOVA
      </Link>
      
      <Link href="/cart" className="flex items-center relative transition-transform active:scale-95">
        <span className="material-symbols-outlined text-primary cursor-pointer">shopping_bag</span>
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
