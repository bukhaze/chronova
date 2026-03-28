"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { useCart } from '@/store/useCart';
import { useWishlist } from '@/store/useWishlist';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

const ProductCard = ({ item }: { item: Product }) => {
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const isWished = has(item.id);

  return (
    <article className="group relative">
      <Link href={`/product/${item.id}`} className="block">
        <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 relative">
          {item.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-label font-bold tracking-widest uppercase rounded-none">
                {item.badge}
              </span>
            </div>
          )}
          <img
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={item.image}
          />
        </div>
      </Link>
      {/* Action buttons */}
      <button
        onClick={(e) => { e.preventDefault(); toggle(item.id); }}
        className="absolute top-4 right-4 bg-surface/60 backdrop-blur-md p-2 rounded-full z-20"
      >
        <span className={`material-symbols-outlined text-lg ${isWished ? 'text-red-400 fill-1' : 'text-on-surface-variant'}`}>
          favorite
        </span>
      </button>
      <button
        onClick={(e) => { e.preventDefault(); addItem({ id: item.id, name: item.name, brand: item.brand, price: item.price, image: item.image }); }}
        className="absolute bottom-[calc(40%+1rem)] right-4 bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-none text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 z-20"
      >
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
      <Link href={`/product/${item.id}`} className="block">
        <div className="flex flex-col gap-1 px-1">
          <p className="text-[10px] font-label uppercase tracking-[0.2em] text-primary">{item.brand}</p>
          <h3 className="text-xl text-on-surface font-headline italic">{item.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-body text-on-surface-variant">${item.price.toLocaleString()}</p>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="text-xs">{item.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default function ShopAll() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 pb-32 px-4 max-w-md mx-auto flex-grow">
        <section className="mb-12">
          <h1 className="text-4xl leading-tight mb-2 text-on-surface font-headline italic">
            The <span className="text-primary italic">Curated</span> Collection
          </h1>
          <p className="font-body text-on-surface-variant text-sm tracking-wide leading-relaxed opacity-80">
            Explore our selection of horological masterpieces, where heritage meets contemporary precision.
          </p>
        </section>

        <section className="mb-12 flex items-center justify-between sticky top-20 bg-surface/95 py-3 z-40 border-b border-outline-variant/10">
          <button className="flex items-center gap-2 px-6 py-2 bg-surface-container-highest rounded-none border border-outline-variant/15">
            <span className="material-symbols-outlined text-sm text-primary">filter_list</span>
            <span className="text-[10px] font-label uppercase tracking-widest font-bold">Filters</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Sorting: Newest</span>
            <span className="material-symbols-outlined text-primary text-sm">keyboard_arrow_down</span>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-16">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>

        <section className="mt-20 flex flex-col items-center gap-6">
          <div className="w-12 h-[1px] bg-outline-variant/30"></div>
          <p className="text-[10px] font-label text-on-surface-variant/60 uppercase tracking-widest">
            Showing {products.length} masterpieces
          </p>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
