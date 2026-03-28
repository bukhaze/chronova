"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { useWishlist } from "@/store/useWishlist";
import { useCart } from "@/store/useCart";
import { getProductById } from "@/data/products";
import type { Product } from "@/data/products";

export default function WishlistPage() {
  const { items: wishlistIds, toggle, clearWishlist } = useWishlist();
  const { addItem } = useCart();
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // We fetch the full product data based on the stored IDs
    const currentProducts = wishlistIds
      .map(id => getProductById(id))
      .filter((p): p is Product => p !== undefined);
    
    setWishlistProducts(currentProducts);
  }, [wishlistIds]);

  if (!mounted) return null; // Prevent hydration errors

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-md mx-auto flex-grow w-full">
        <section className="mb-8 flex justify-between items-end border-b border-outline-variant/10 pb-4">
          <div>
            <h1 className="font-headline italic text-4xl text-on-surface mb-1">Your Curated Vault</h1>
            <p className="font-body text-xs text-on-surface-variant font-light tracking-widest uppercase">
              {wishlistIds.length} {wishlistIds.length === 1 ? 'Masterpiece' : 'Masterpieces'} Saved
            </p>
          </div>
          {wishlistIds.length > 0 && (
            <button 
              onClick={clearWishlist}
              className="text-[10px] font-label text-error uppercase tracking-widest border-b border-error/30 pb-1"
            >
              Clear Vault
            </button>
          )}
        </section>

        {wishlistProducts.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant/40">favorite_border</span>
            </div>
            <p className="font-headline italic text-xl text-on-surface mb-2">Your vault is empty</p>
            <p className="text-sm text-on-surface-variant font-light mb-8 max-w-[250px]">
              Explore our collection and add extraordinary pieces to your personal vault.
            </p>
            <Link 
              href="/shop" 
              className="px-8 py-3 bg-primary text-on-primary font-label text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              Discover Perfection
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="flex gap-4 p-4 bg-surface-container-low border border-transparent hover:border-outline-variant/10 transition-colors relative group">
                {/* Remove button */}
                <button 
                  onClick={() => toggle(product.id)}
                  className="absolute top-2 right-2 p-2 z-20 text-on-surface-variant hover:text-error transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>

                <Link href={`/product/${product.id}`} className="block w-24 h-32 flex-shrink-0 bg-surface-container relative">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </Link>
                
                <div className="flex flex-col flex-grow justify-between py-1">
                  <div>
                    <Link href={`/product/${product.id}`}>
                      <p className="text-[10px] font-label uppercase tracking-widest text-primary truncate max-w-[150px]">{product.brand}</p>
                      <h3 className="text-lg text-on-surface font-headline italic leading-tight mt-1 truncate max-w-[150px]">{product.name}</h3>
                    </Link>
                    <p className="text-sm font-body text-on-surface-variant mt-2">${product.price.toLocaleString()}</p>
                  </div>
                  
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image })}
                    className="flex justify-center items-center py-2.5 w-full bg-surface-container border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-on-primary transition-colors font-label text-[10px] uppercase tracking-widest mt-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
