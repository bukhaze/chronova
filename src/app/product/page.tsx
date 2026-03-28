import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export default function ProductDetails() {
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTnghzKqIOyH8vvmAZagq1m9UtguoR99_IjaTsqhP2QmVg7kFI5uVTi6DNpcXsLMK0KPUK_rFwcgX6WYLYt8RQB3sftfaqqUDLIX1bxHaxyNolWW8_QMEQl74-41sNSJo3YHNrPesYQ1dfQEtC_7ybnZ6U5bK9KLEu6lZXnljHHahMY8ZSoqo0mHbLsWa69h2kj6CT_UQFTO5Kd8ba0cx88_jtdbUBiQBM3j3qIRRCOYYXiDzEpEqFKhqejXLQxfZXy6pBBKgArk1',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbABmrWFie9kDrmJ-dhoL_fzzRcaTIgciCX1Pe29EhnP-WWRgH3bYsehNf5a-sCh8SrXGwh_tt-XjQ-xgfXgHz8MUC1IMSPeLUbxetY1E3tULDkfJDKCcoojn0TQsy4O53XydkxOgDHSRDGb76rzqVhOlPYwxvWtEvFdaWkLsn49TctCYBllb0Ouq3qao26EqOl5jckDIeK-dx-v0P_SKyXo-mi64OfnBnAguQJlmvKhWs36QkZ1z7XYzL9ECUDm6dVOOoJqW6Dx5',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCwJ7LtSdtEXdLxwGhnNN2vfbJmQfLSafsmQRVG558phxCyEVbOYMvztOsZ38aoYbiAAUhlbzMBT7MUIjcy-Jt4WduNj5-eFIrpHDUC-xrBH6YdSn5efCtg0D0eQuVJh7SNOT3FGhV_owpy1_E7I-GY9IhOJn4aB7jZ6CHprk-ipnzu9TdjgcqJz94kG3DMHYOTv7_i9SWdhnbunwRHtNqZFwIvEYwbLKwxC8YkDUj-5rennKSx4aD5ElBt6WzWALv2OO7Hn7rFGcgI',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-16 pb-32 flex-grow">
        {/* Image Gallery */}
        <section className="relative w-full aspect-[4/5] bg-surface-container-lowest overflow-hidden">
          <div className="flex h-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {images.map((src, i) => (
              <div key={i} className="min-w-full h-full snap-center">
                <img className="w-full h-full object-cover" src={src} alt={`Product view ${i + 1}`} />
              </div>
            ))}
          </div>
          {/* Gallery Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface/20"></span>
          </div>
          {/* Badge */}
          <div className="absolute top-8 right-0 bg-primary/10 backdrop-blur-md px-4 py-2 border-l border-primary/20">
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary">Limited Edition</p>
          </div>
        </section>

        {/* Product Info */}
        <section className="px-6 mt-10">
          <div className="flex justify-between items-start mb-2">
            <p className="font-label text-xs tracking-widest text-primary uppercase">Eterna Collection</p>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="text-xs font-bold">4.9</span>
            </div>
          </div>
          <h2 className="font-headline text-4xl italic mb-4 leading-tight">The Celestial Chronograph</h2>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-2xl font-body font-light text-on-surface">$12,450.00</span>
            <span className="text-xs text-green-500 font-label tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              IN STOCK
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-10 font-light">
            A masterpiece of horological engineering, featuring a hand-wound movement and a dial inspired by the night sky over the Swiss Alps.
          </p>

          {/* Options */}
          <div className="space-y-8 mb-10">
            <div>
              <label className="block text-[10px] tracking-[0.15em] uppercase text-on-surface-variant mb-4 font-bold">Case Finish</label>
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full bg-[#e9c176] ring-2 ring-primary ring-offset-4 ring-offset-surface"></button>
                <button className="w-8 h-8 rounded-full bg-[#c6c6c6] border border-outline-variant"></button>
                <button className="w-8 h-8 rounded-full bg-[#353534] border border-outline-variant"></button>
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.15em] uppercase text-on-surface-variant mb-4 font-bold">Strap Material</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-surface-container-highest text-on-surface text-xs tracking-wider border border-primary">Alligator Leather</button>
                <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant text-xs tracking-wider border border-outline-variant/20">Milano Mesh</button>
              </div>
            </div>
          </div>

          {/* Qty & Actions */}
          <div className="flex gap-3 mb-12">
            <div className="flex items-center bg-surface-container-low border border-outline-variant/10 px-2">
              <button className="p-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm">remove</span></button>
              <span className="px-4 font-body text-sm">01</span>
              <button className="p-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm">add</span></button>
            </div>
            <button className="flex-1 btn-gold-gradient text-on-primary font-label text-xs font-extrabold uppercase tracking-widest py-4 shadow-xl shadow-primary/10 active:scale-95 transition-transform">
              Add to Collection
            </button>
          </div>
        </section>

        {/* Tabs */}
        <section className="border-t border-outline-variant/10">
          <div className="flex overflow-x-auto border-b border-outline-variant/5 no-scrollbar">
            <button className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-b-2 border-primary whitespace-nowrap">Description</button>
            <button className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant whitespace-nowrap">Specifications</button>
            <button className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant whitespace-nowrap">Shipping</button>
            <button className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant whitespace-nowrap">Reviews (24)</button>
          </div>
          <div className="p-8 bg-surface-container-lowest/50">
            <h4 className="font-headline italic text-lg mb-4">The Art of Precision</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-light mb-6">
              Every Celestial Chronograph undergoes 400 hours of rigorous testing at our Geneva workshop. The oscillating weight is finished with &apos;Côtes de Genève&apos; circular graining, visible through the sapphire case back.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                72-Hour Power Reserve
              </li>
              <li className="flex items-center gap-3 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Water resistant to 50 meters
              </li>
            </ul>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16 px-6 mb-20">
          <h3 className="font-headline text-2xl italic mb-8">Complementary Pieces</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmA4BZxgtzBQo9glIoVHrtGB0nh8AamCq7aEf7RuPhKf-tLftbqoX9XIBL7oGgg9nBYeAd-Z3AaNELRStRcOemtJhmr4V05El-uklHdDH4853G-ta_bJV8uLS-Oq6ItCaL3zB_-iotKEQtN0jCzOqcx2msa9YiS6tMpjVXQqf87n6S5a6FFEGCHOMKsAf4wCmuLjwcZRFkIhUZMd1PNAG0O5DkVmdf9ufKRsX4u8DTLnJFGdeEd3_famxumOV36a2MuPDo-c3oIQ8c" alt="Related product 1" />
              </div>
              <div>
                <p className="font-label text-[10px] tracking-widest text-primary uppercase">Monolith</p>
                <p className="font-headline italic text-sm">Lunar Silver</p>
                <p className="text-xs text-on-surface-variant mt-1">$8,200</p>
              </div>
            </div>
            <div className="space-y-4 translate-y-8">
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2P7lEv0HRyCNpZvjTes5bBNb1mROo6GqobiZRcY3TOQi9moKv6XCMUVOdM0N76Bff8Qu27Y8i1qCI2mceQDDUWht3J6JdNHNGVQfwCJJLqbX1QTii7uKPChJmnwx6qWFkXOoaNSFqJ3o0_VdzPj4NnvJtuSHFWFSn_cl1fWhDlGgleCjoR-pH8JVHxbCQUM58UOtRQI__IC2Ht0AVCjZsa4_xeq_vkuwgZbUuifl4BJQA-_hhmoxlJHvGBvJ22_WRO-gXQhnHl4xs" alt="Related product 2" />
              </div>
              <div>
                <p className="font-label text-[10px] tracking-widest text-primary uppercase">Navigator</p>
                <p className="font-headline italic text-sm">Deep Azure</p>
                <p className="text-xs text-on-surface-variant mt-1">$9,500</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
