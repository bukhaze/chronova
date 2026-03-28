"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { useCart } from '@/store/useCart';
import { useWishlist } from '@/store/useWishlist';
import { getProductById, getRelatedProducts } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-24 pb-32 px-6 flex-grow flex flex-col items-center justify-center text-center">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-6">watch_off</span>
          <h1 className="font-headline italic text-3xl text-on-surface mb-3">Piece Not Found</h1>
          <p className="text-sm text-on-surface-variant mb-8">This timepiece may have been moved or is no longer available.</p>
          <Link href="/shop" className="btn-gold-gradient text-on-primary px-10 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">
            Browse Collection
          </Link>
        </main>
        <Footer />
        <BottomNav />
      </div>
    );
  }

  const tabs = ['Description', 'Specifications', 'Shipping', `Reviews (${product.reviews})`];
  const isWished = has(product.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-16 pb-32 flex-grow">
        {/* Image Gallery */}
        <section className="relative w-full aspect-[4/5] bg-surface-container-lowest overflow-hidden">
          <div className="flex h-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {product.images.map((src, i) => (
              <div key={i} className="min-w-full h-full snap-center" onClick={() => setActiveImage(i)}>
                <img className="w-full h-full object-cover" src={src} alt={`${product.name} view ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === activeImage ? 'bg-primary' : 'bg-on-surface/20'}`}></span>
            ))}
          </div>
          {product.badge && (
            <div className="absolute top-8 right-0 bg-primary/10 backdrop-blur-md px-4 py-2 border-l border-primary/20">
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary">{product.badge}</p>
            </div>
          )}
          {/* Wishlist button */}
          <button onClick={() => toggle(product.id)} className="absolute top-8 left-4 bg-surface/60 backdrop-blur-md p-2 rounded-full">
            <span className={`material-symbols-outlined text-xl ${isWished ? 'text-red-400 fill-1' : 'text-on-surface-variant'}`}>
              favorite
            </span>
          </button>
        </section>

        {/* Product Info */}
        <section className="px-6 mt-10">
          <div className="flex justify-between items-start mb-2">
            <p className="font-label text-xs tracking-widest text-primary uppercase">{product.brand}</p>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="text-xs font-bold">{product.rating}</span>
            </div>
          </div>
          <h2 className="font-headline text-4xl italic mb-4 leading-tight">{product.name}</h2>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-2xl font-body font-light text-on-surface">${product.price.toLocaleString()}.00</span>
            <span className="text-xs text-green-500 font-label tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-10 font-light">{product.description}</p>

          {/* Add to Cart */}
          <div className="flex gap-3 mb-12">
            <button
              onClick={() => addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image })}
              className="flex-1 btn-gold-gradient text-on-primary font-label text-xs font-extrabold uppercase tracking-widest py-4 shadow-xl shadow-primary/10 active:scale-95 transition-transform"
            >
              Add to Collection
            </button>
          </div>
        </section>

        {/* Tabs */}
        <section className="border-t border-outline-variant/10">
          <div className="flex overflow-x-auto border-b border-outline-variant/5 no-scrollbar">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap ${i === activeTab ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-8 bg-surface-container-lowest/50">
            {activeTab === 0 && (
              <>
                <h4 className="font-headline italic text-lg mb-4">The Art of Precision</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed font-light mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {activeTab === 1 && (
              <div className="space-y-4">
                {product.specs.map((s, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-outline-variant/10 last:border-0">
                    <span className="text-xs text-on-surface-variant uppercase tracking-wider">{s.label}</span>
                    <span className="text-xs text-on-surface font-medium">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-on-surface-variant leading-relaxed font-light">Complimentary white-glove delivery on all orders. Express Concierge service delivers within 24-48 hours.</p>
                <p className="text-sm text-on-surface-variant leading-relaxed font-light">All timepieces are shipped fully insured with signature confirmation required.</p>
              </div>
            )}
            {activeTab === 3 && (
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                {product.reviews} verified reviews · {product.rating} average rating
              </p>
            )}
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16 px-6 mb-20">
          <h3 className="font-headline text-2xl italic mb-8">Complementary Pieces</h3>
          <div className="grid grid-cols-2 gap-4">
            {related.map((r, i) => (
              <Link href={`/product/${r.id}`} key={r.id} className={`space-y-4 ${i % 2 !== 0 ? 'translate-y-8' : ''}`}>
                <div className="aspect-square bg-surface-container-low overflow-hidden">
                  <img className="w-full h-full object-cover" src={r.image} alt={r.name} />
                </div>
                <div>
                  <p className="font-label text-[10px] tracking-widest text-primary uppercase">{r.brand}</p>
                  <p className="font-headline italic text-sm">{r.name}</p>
                  <p className="text-xs text-on-surface-variant mt-1">${r.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
