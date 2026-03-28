import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16 pb-20">
        {/* Announcement Bar */}
        <div className="bg-surface-container-lowest text-primary py-2 px-4 text-center">
          <p className="font-label text-[10px] tracking-[0.2em] uppercase font-bold">
            Complimentary Global Shipping on all Heritage Pieces
          </p>
        </div>

        {/* Hero Section */}
        <section className="relative h-[751px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Luxury Watch Hero"
              className="w-full h-full object-cover brightness-[0.4]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEATqzVcpMc1vk064XGVH3ymoPC6ZoGxWGPX6eiWiLUqTHFm5Sn5iHCj0hCa8JGPgcgfLnaOq8LD6uGoMTs0F3ZxwmTrM0Q7Y2SAvpwALsgkbcWxd7EXPUk6AaoZiume7HXq2n9V5h2fYl6XH7aSS_Rrx41n4ExnL_LHmYY-3wLMkE7Br0Iw3xrceYrpQxY6ytuEmlXtOYp-_jve52oXnBx3_wj8-bsQOwVQ_ER5jtJBaMe8fH2gyA7iw0lKlX8Sxs9ryBffBVNfUa"
            />
          </div>
          <div className="relative z-10 px-8 pb-16 w-full">
            <h1 className="font-headline italic text-4xl md:text-6xl text-white leading-tight mb-6">
              Timeless <br /> <span className="text-gold-gradient">Elegance</span> <br /> on Your Wrist
            </h1>
            <div className="flex flex-col gap-4 max-w-xs">
              <button className="btn-gold-gradient text-on-primary font-label font-bold py-4 px-8 uppercase tracking-widest text-sm rounded-none">
                Shop Now
              </button>
              <button className="bg-transparent border border-outline-variant text-white font-label font-bold py-4 px-8 uppercase tracking-widest text-sm rounded-none backdrop-blur-sm">
                Explore Heritage
              </button>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="px-6 py-20 bg-surface">
          <h2 className="font-headline italic text-2xl text-primary mb-10 tracking-widest uppercase">Collections</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] bg-surface-container-high overflow-hidden col-span-1">
              <img
                alt="Men's Collection"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-7g1ge_Z441Rlomi7wf3BEsSlrr-pS6AXzOlXCuGX3UJ4SW9HOvEL47DCSJKHHvVRDNfm78HDMcH1ebTQzo2ec-43tjLlJCFqEfDtpvNUXLAFISh5KkTYDsiupDWbIr8O7IiALrsi5mDF-rQa5sWzTfAzCa9GXN75A0GNjDjZdfHGynUjrNjwni6wNabVQAy8o-u8U-WzWhwjldY7sZ0bFxVTuhyL1c2l-WEC_iWi9f4tLNrmYJ2aa8x6M74J6BY11H1cZcV4DC2"
              />
              <div className="absolute bottom-4 left-4">
                <p className="font-label text-xs text-white uppercase tracking-widest font-bold">Men's</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] bg-surface-container-high overflow-hidden col-span-1">
              <img
                alt="Women's Collection"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfSq7xZ2dTpp9voIKTLkLht8RRa1MnpcO7IrNIcK9co7gCnFbWhe78EIe_S74XDypKDwSjl3caJ_RctIDC34gAAchf4XZf6akEabmo-8MLCgqUaRO9CQkryHGkkChlY_Eyp17hudF1CVaqnpfh7EowecigoNchTRefRiA37RpnULjtQwJvI5ZDKUrMpKjg8yy5n_uH_njwLIgEyKsoiT5DKvx_QKmPHbAnfomgYJ5w-JmrQwUZFt76ZJJcEqRmRtE3envvsV26sgAb"
              />
              <div className="absolute bottom-4 left-4">
                <p className="font-label text-xs text-white uppercase tracking-widest font-bold">Women's</p>
              </div>
            </div>
            <div className="relative aspect-video bg-surface-container-high overflow-hidden col-span-2">
              <img
                alt="Exotic Luxury"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDndJbfqUNkizMD2V4YwqGWnljQ8ZVm0NziXt2881VOQmivNFKLt2mF5_7tNwkOWeOMc-K8eEgcVfonqDMAzE8nfWNXSspMinE9YrB7xWTsfJHT50G8iHmpcMQ6qmx9gIYI5i68Jg0MgjobZPRX7OtSd5Btu_kUswe0zu5YGphE9RocCm--q6rlbBlTl2ZtVjfnciZ18Aev-dpHXWAAjJVnanTPo_iDiFzLWDMYnlkG6Wj4KTMLvmH0zfLbBBp6_qEbGYTgJxpFtlT"
              />
              <div className="absolute bottom-4 left-4">
                <p className="font-label text-xs text-white uppercase tracking-widest font-bold">Exotic Luxury</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-20 bg-surface-container-low">
          <div className="px-6 mb-10 flex justify-between items-end">
            <div>
              <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">Current Favorites</span>
              <h2 className="font-headline italic text-3xl text-white mt-2">Trending</h2>
            </div>
          </div>
          <div className="flex overflow-x-auto px-6 gap-6 no-scrollbar">
            {/* Trending Card 1 */}
            <div className="min-w-[280px] group">
              <div className="bg-surface relative overflow-hidden aspect-square mb-6">
                <img
                  alt="Watch 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW17RuMmhu51D21Hn8m3ilAw8ban9FArfVOsfZV5PINMrICigeC8u-88YViAHA1YMDVG7W0i9dQhPYj4s0cNmTTliyoRzFcsmEBT0GQXP8qWGP9_TsyBpT-VFRubYC8Cz1ChNbgJC-1OG2OmITIv6OALkP_JA16M-ZFonfXawzEmo2__bJF0IurC0y7vs7piRGcZ9wWP57q887liJd2Nh6o_A3a4QUi-T2_Bmpvb7QXslalG3wJGamfXM_rtK0k5A4JIK84DsrUnaF"
                />
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-3 rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                </button>
              </div>
              <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">CHRONOVA HERITAGE</p>
              <h3 className="font-headline text-lg text-white mb-2">Oceanic Deep 44</h3>
              <div className="flex justify-between items-center">
                <span className="font-body text-on-surface-variant">$4,250.00</span>
                <div className="flex items-center text-primary gap-1">
                  <span className="material-symbols-outlined text-[12px] fill-1">star</span>
                  <span className="text-[10px] font-bold">4.9</span>
                </div>
              </div>
            </div>
            {/* Trending Card 2 */}
            <div className="min-w-[280px] group">
              <div className="bg-surface relative overflow-hidden aspect-square mb-6">
                <img
                  alt="Watch 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsONR1HuR-3jBoAyKHgX70AjIWOpbOhLTpoqh_FmB4iedWPe9jZTlSZ1zFXVsGM7ifk6bZ5JKWNgQ1t_4RfzQp6nyPN4eu0G5YYytcEuTFiIxZnbZdV8DBo7FUUZYYtLAJaQdNueKGmbPLXsxOP9FgNFUcZwxsXLzhypFOeZB8aKw19TWh6D9qTDmWd-JwuV5diWvmo_0P8yZSnn9CdhlHobhkbKeim5W7oyQl8shnkeYMsaG7SIiKe8D9nceVY2QL_asNG903eEZl"
                />
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-3 rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                </button>
              </div>
              <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">BESPOKE SERIES</p>
              <h3 className="font-headline text-lg text-white mb-2">The Alchemist Gold</h3>
              <div className="flex justify-between items-center">
                <span className="font-body text-on-surface-variant">$8,900.00</span>
                <div className="flex items-center text-primary gap-1">
                  <span className="material-symbols-outlined text-[12px] fill-1">star</span>
                  <span className="text-[10px] font-bold">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="relative h-64 mx-6 my-20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary-container/20 z-0">
            <img
              alt="Promo Background"
              className="w-full h-full object-cover mix-blend-overlay opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrwYIP4ozBs1tIMKqgFVYY2Pas71Iu-KhJPzzTC21nQFzQnNvz7Q1xKqQ3gz8PYbYbQ-Ihm5gepiShFpcakJzvAwKa1PTrGC8a_mu5KeMKq7pnOOjJc_2iQL7-bwQKi5xljMhbbu-zi6uyI4oaGYGjuoWAtU6o2lczY2vRs_gUb6Wc6qtO7PSAQAapvgZnfKr3ovp1Roc8dksowrduoItkLjR_8XR-NYWVMgP4ZR8LeRZEEYpD-6G0pVwBv_s3ZwCy7NQUNQ4gm_VC"
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <h2 className="font-headline italic text-2xl text-white mb-4">Exclusive Collection</h2>
            <p className="font-label text-primary uppercase tracking-[0.3em] text-xs mb-6">Up to 30% Off Seasonal Curations</p>
            <button className="border-b border-primary text-primary font-label text-[10px] tracking-widest uppercase pb-1">
              View Sale
            </button>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20 bg-surface">
          <div className="px-6 mb-10">
            <h2 className="font-headline italic text-3xl text-white">New Arrivals</h2>
            <div className="w-12 h-[1px] bg-primary mt-4"></div>
          </div>
          <div className="px-6 space-y-12">
            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-high aspect-[4/5] overflow-hidden">
                <img
                  alt="New Arrival 1"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1xKvdSOmCpHXcF9pR_D5oYSGxVTOt-mZSKCnlKMmpT8_iAUTd4UDGvCQ_CXSQWegqzaBpCjaXPw8m5lnnJgSKJna7C2LPXM4wbm2SJJL_uOOrjLHIzzAG3exuSVQPGhm8J9qCrGxLUe_DOaqXx4pHCN8UntSHbKdCRxBy6S5h5gemo-tCe6lJwQN0evH4IEOsSHBTUNJ7N_AiDB0BBPL0-9blFaNkewUbVNASs4kTssvNfkRBZwaWWffhE-1EXt6wnsKT5s4Oqfuv"
                />
              </div>
              <div>
                <p className="font-label text-primary uppercase tracking-widest text-[10px] mb-2">Modernist Edge</p>
                <h3 className="font-headline text-2xl text-white italic">Chronova Nexus S</h3>
                <p className="font-body text-on-surface-variant text-sm mt-4 leading-relaxed">
                  The intersection of timeless aesthetics and next-generation connectivity. Precision redefined.
                </p>
                <button className="mt-6 font-label text-primary uppercase text-[10px] tracking-widest border border-outline-variant px-6 py-3">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-surface-container-lowest">
          <div className="grid grid-cols-2 gap-px bg-outline-variant/10">
            {[
              { icon: 'verified', title: 'Authentic', desc: 'Certified Swiss movements' },
              { icon: 'lock', title: 'Secure', desc: 'End-to-end encryption' },
              { icon: 'local_shipping', title: 'Fast Delivery', desc: 'Priority global freight' },
              { icon: 'shield', title: 'Warranty', desc: 'Lifetime care program' },
            ].map((item, index) => (
              <div key={index} className="bg-surface-container-lowest p-8 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">{item.icon}</span>
                <h4 className="font-label text-[10px] tracking-widest uppercase text-white font-bold mb-2">{item.title}</h4>
                <p className="font-body text-[10px] text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-8 bg-surface-container-high text-center">
          <h2 className="font-headline italic text-3xl text-white mb-4">The Journal</h2>
          <p className="font-body text-on-surface-variant text-sm mb-10 max-w-xs mx-auto">
            Be the first to receive invitations to our private auctions and heritage releases.
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary text-white placeholder:text-on-surface-variant/50 text-[10px] tracking-[0.2em] py-4 rounded-none outline-none transition-colors"
              placeholder="YOUR EMAIL ADDRESS"
              type="email"
            />
            <button className="w-full py-4 text-[10px] tracking-[0.3em] uppercase font-bold text-on-primary btn-gold-gradient" type="submit">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
