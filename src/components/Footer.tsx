import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full pt-20 pb-40 px-8 flex flex-col items-center text-center gap-12">
      <div className="font-headline text-lg text-primary tracking-widest font-bold">CHRONOVA</div>
      
      <nav className="flex flex-col gap-4">
        <Link href="#" className="font-body text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Privacy Policy</Link>
        <Link href="#" className="font-body text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Terms of Service</Link>
        <Link href="#" className="font-body text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Shipping & Returns</Link>
        <Link href="#" className="font-body text-xs tracking-widest uppercase text-on-surface-variant/40 hover:text-on-surface transition-colors">Sustainability</Link>
      </nav>
      
      <div className="flex gap-8">
        <span className="material-symbols-outlined text-on-surface-variant/40 text-xl cursor-pointer hover:text-primary">public</span>
        <span className="material-symbols-outlined text-on-surface-variant/40 text-xl cursor-pointer hover:text-primary">schedule</span>
        <span className="material-symbols-outlined text-on-surface-variant/40 text-xl cursor-pointer hover:text-primary">diamond</span>
      </div>
      
      <p className="font-body text-[8px] tracking-[0.2em] text-on-surface-variant/20 uppercase">© 2024 CHRONOVA HOROLOGY. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
