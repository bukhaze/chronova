"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: 'home', label: 'Home', href: '/' },
    { icon: 'search', label: 'Search', href: '/search' },
    { icon: 'favorite', label: 'Saved', href: '/wishlist' },
    { icon: 'person', label: 'Account', href: '/account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 bg-surface/90 glass-nav shadow-[0_-4px_20px_rgba(0,0,0,0.5)] border-t border-outline-variant/10">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all ${
              isActive ? 'text-primary scale-110' : 'text-on-surface-variant/40 hover:text-primary/80'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
