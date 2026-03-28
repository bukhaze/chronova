"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import type { Product } from "@/data/products";
import { useWishlist } from "@/store/useWishlist";
import { useCart } from "@/store/useCart";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const { toggle, has: hasWishlist } = useWishlist();
  const { addItem } = useCart();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      } catch (e) {
        console.error("Failed to search products", e);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-md mx-auto flex-grow w-full">
        {/* Search header */}
        <section className="mb-8">
          <h1 className="font-headline italic text-4xl text-on-surface mb-6">Discover</h1>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              name="search"
              placeholder="Search collections, pieces, collections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-surface-container-high border border-outline-variant/10 px-12 py-4 font-body text-sm focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/40 rounded-none shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </section>

        {/* Results Info */}
        <section className="mb-6 flex justify-between items-center text-xs font-label uppercase tracking-widest text-on-surface-variant">
          <span>{loading ? "Searching..." : `${results.length} Pieces Found`}</span>
          {!query && <span>Trending Pieces</span>}
        </section>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          {results.map((product) => (
            <div key={product.id} className="group relative bg-surface-container-low border border-transparent hover:border-outline-variant/10 transition-colors">
              <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden mb-3">
                {product.badge && (
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-primary text-on-primary px-1.5 py-0.5 text-[8px] font-label font-bold tracking-widest uppercase rounded-none">
                      {product.badge}
                    </span>
                  </div>
                )}
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={product.image}
                />
              </Link>
              
              <button
                onClick={(e) => { e.preventDefault(); toggle(product.id); }}
                className="absolute top-2 right-2 bg-surface/60 backdrop-blur-md p-1.5 rounded-full z-20 hover:bg-surface transition-colors"
              >
                <span className={`material-symbols-outlined text-sm ${hasWishlist(product.id) ? 'text-red-400 fill-1' : 'text-on-surface-variant'}`}>
                  favorite
                </span>
              </button>

              <div className="px-3 pb-4">
                <Link href={`/product/${product.id}`}>
                  <p className="text-[8px] font-label uppercase tracking-[0.2em] text-primary truncate max-w-full">{product.brand}</p>
                  <h3 className="text-sm text-on-surface font-headline italic leading-tight mt-1 mb-2 line-clamp-1">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-body text-on-surface-variant font-light">${product.price.toLocaleString()}</p>
                  <button
                    onClick={(e) => { e.preventDefault(); addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image }); }}
                    className="text-primary hover:text-primary-variant transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!loading && results.length === 0 && (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/30 mb-4">search_off</span>
            <p className="font-headline italic text-xl text-on-surface mb-2">No masterpieces found</p>
            <p className="text-sm text-on-surface-variant font-light">Try adjusting your search criteria</p>
          </div>
        )}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
