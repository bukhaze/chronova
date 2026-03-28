export interface Product {
  id: string;
  name: string;
  brand: string;
  collection: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: 'celestial-gold',
    name: 'The Celestial Gold Edition',
    brand: 'Vanguard Series',
    collection: 'Eterna',
    price: 24500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9nYep9BRnNxBjuz5i40MyJzWELCcfKr4UoySi6eUQiq4sbPngQvmhAwh_ehDmy4ISx7VJt0iASej5H-Ku1kfvcegjZom_GyThaJSv6B5_MSZSaBvIpGLE_7szQ18D0bflV5zAu6pqH2p5gzfLw9vms_vdXe3FFkgpU3T3a8eHCML-dgO-vy1iTkFYFcn18HQpwty51CUjHlgP96k48sr-LuJny2bDyCQIGcT60b9cwJe_CVeEspmhlBVf122EdDOkECi1MEibEWED',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9nYep9BRnNxBjuz5i40MyJzWELCcfKr4UoySi6eUQiq4sbPngQvmhAwh_ehDmy4ISx7VJt0iASej5H-Ku1kfvcegjZom_GyThaJSv6B5_MSZSaBvIpGLE_7szQ18D0bflV5zAu6pqH2p5gzfLw9vms_vdXe3FFkgpU3T3a8eHCML-dgO-vy1iTkFYFcn18HQpwty51CUjHlgP96k48sr-LuJny2bDyCQIGcT60b9cwJe_CVeEspmhlBVf122EdDOkECi1MEibEWED',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTnghzKqIOyH8vvmAZagq1m9UtguoR99_IjaTsqhP2QmVg7kFI5uVTi6DNpcXsLMK0KPUK_rFwcgX6WYLYt8RQB3sftfaqqUDLIX1bxHaxyNolWW8_QMEQl74-41sNSJo3YHNrPesYQ1dfQEtC_7ybnZ6U5bK9KLEu6lZXnljHHahMY8ZSoqo0mHbLsWa69h2kj6CT_UQFTO5Kd8ba0cx88_jtdbUBiQBM3j3qIRRCOYYXiDzEpEqFKhqejXLQxfZXy6pBBKgArk1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbABmrWFie9kDrmJ-dhoL_fzzRcaTIgciCX1Pe29EhnP-WWRgH3bYsehNf5a-sCh8SrXGwh_tt-XjQ-xgfXgHz8MUC1IMSPeLUbxetY1E3tULDkfJDKCcoojn0TQsy4O53XydkxOgDHSRDGb76rzqVhOlPYwxvWtEvFdaWkLsn49TctCYBllb0Ouq3qao26EqOl5jckDIeK-dx-v0P_SKyXo-mi64OfnBnAguQJlmvKhWs36QkZ1z7XYzL9ECUDm6dVOOoJqW6Dx5',
    ],
    badge: 'Limited',
    rating: 4.9,
    reviews: 24,
    inStock: true,
    description: 'A masterpiece of horological engineering, featuring a hand-wound movement and a dial inspired by the night sky over the Swiss Alps.',
    features: ['72-Hour Power Reserve', 'Water resistant to 50 meters', 'Sapphire crystal case back', 'COSC Certified Chronometer'],
    specs: [
      { label: 'Movement', value: 'Calibre CH-9401 Manual' },
      { label: 'Case', value: '41mm 18K Yellow Gold' },
      { label: 'Crystal', value: 'Sapphire, AR coated' },
      { label: 'Strap', value: 'Alligator Leather' },
    ],
  },
  {
    id: 'monolith-silver',
    name: 'Monolith Silver Onyx',
    brand: 'Heritage Line',
    collection: 'Monolith',
    price: 8200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGe8AVAstlnesUfoUAYexTN2tcmxnXxazZhpUBFL66tBGmknxS38IyigdLHY9vj97ukR0ocxd2YL8e1Gs1APaJ4oHEElGnYoQ5RhzDH53ojXlEOVP9cdV5qINglkF51_X_4qzp_-Kt-GESORt8OaIPNdkD2orzGHKFVgYydyCm2v73WgX5VCaRUNV6lqhboY6QCTjC70JLNjFXkVP-Zp6LxuGX1jBifufQIxd0To4WtB9qtRqgKg1AL4WWawQYFmRy6t0fpLQn8lL4',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGe8AVAstlnesUfoUAYexTN2tcmxnXxazZhpUBFL66tBGmknxS38IyigdLHY9vj97ukR0ocxd2YL8e1Gs1APaJ4oHEElGnYoQ5RhzDH53ojXlEOVP9cdV5qINglkF51_X_4qzp_-Kt-GESORt8OaIPNdkD2orzGHKFVgYydyCm2v73WgX5VCaRUNV6lqhboY6QCTjC70JLNjFXkVP-Zp6LxuGX1jBifufQIxd0To4WtB9qtRqgKg1AL4WWawQYFmRy6t0fpLQn8lL4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmA4BZxgtzBQo9glIoVHrtGB0nh8AamCq7aEf7RuPhKf-tLftbqoX9XIBL7oGgg9nBYeAd-Z3AaNELRStRcOemtJhmr4V05El-uklHdDH4853G-ta_bJV8uLS-Oq6ItCaL3zB_-iotKEQtN0jCzOqcx2msa9YiS6tMpjVXQqf87n6S5a6FFEGCHOMKsAf4wCmuLjwcZRFkIhUZMd1PNAG0O5DkVmdf9ufKRsX4u8DTLnJFGdeEd3_famxumOV36a2MuPDo-c3oIQ8c',
    ],
    rating: 4.7,
    reviews: 18,
    inStock: true,
    description: 'The Monolith line represents architectural precision. Brushed silver case with onyx-black dial creates a stark, masculine statement.',
    features: ['Automatic Movement', 'Water resistant to 100 meters', '48-Hour Power Reserve'],
    specs: [
      { label: 'Movement', value: 'Calibre CH-2200 Auto' },
      { label: 'Case', value: '40mm Stainless Steel' },
      { label: 'Crystal', value: 'Sapphire' },
      { label: 'Strap', value: 'Milano Mesh Steel' },
    ],
  },
  {
    id: 'titanium-racer',
    name: 'Titanium Cloud Racer',
    brand: 'Aero Dynamic',
    collection: 'Navigator',
    price: 15900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr756yj974k6ckWVJeG4mdWDYYu8a541g8lSyARMLf-ReK4ZlAtKuMGGyANYoKAOiMh3HzXi1Cduzp1By1xcMnH9z1xdyQ7UFXJ1JxhOV1P6RSlWRYhAnFe2g6i4O9s9FjzIPU-rhT5mlzdTsCgdvCFz3Vw4gkvYQvqnPzT9CJoCi_0KY4TPY1-xYtG4j1QUnZMKj5ge-soBGTVVGewLhit4uFRnOPBjTCVF6bZY35ofGkOjitSysc_L0EfKXAZO-khVZcJQdG0tvA',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBr756yj974k6ckWVJeG4mdWDYYu8a541g8lSyARMLf-ReK4ZlAtKuMGGyANYoKAOiMh3HzXi1Cduzp1By1xcMnH9z1xdyQ7UFXJ1JxhOV1P6RSlWRYhAnFe2g6i4O9s9FjzIPU-rhT5mlzdTsCgdvCFz3Vw4gkvYQvqnPzT9CJoCi_0KY4TPY1-xYtG4j1QUnZMKj5ge-soBGTVVGewLhit4uFRnOPBjTCVF6bZY35ofGkOjitSysc_L0EfKXAZO-khVZcJQdG0tvA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwJ7LtSdtEXdLxwGhnNN2vfbJmQfLSafsmQRVG558phxCyEVbOYMvztOsZ38aoYbiAAUhlbzMBT7MUIjcy-Jt4WduNj5-eFIrpHDUC-xrBH6YdSn5efCtg0D0eQuVJh7SNOT3FGhV_owpy1_E7I-GY9IhOJn4aB7jZ6CHprk-ipnzu9TdjgcqJz94kG3DMHYOTv7_i9SWdhnbunwRHtNqZFwIvEYwbLKwxC8YkDUj-5rennKSx4aD5ElBt6WzWALv2OO7Hn7rFGcgI',
    ],
    badge: 'New Arrival',
    rating: 5.0,
    reviews: 7,
    inStock: true,
    description: 'Engineered for the modern explorer. Grade 5 titanium case with aerospace-inspired dial layout and luminescent markers.',
    features: ['GMT Function', 'Water resistant to 200 meters', '60-Hour Power Reserve', 'Titanium Case'],
    specs: [
      { label: 'Movement', value: 'Calibre CH-5500 GMT' },
      { label: 'Case', value: '43mm Grade 5 Titanium' },
      { label: 'Crystal', value: 'Sapphire, dual AR' },
      { label: 'Strap', value: 'Rubber Composite' },
    ],
  },
  {
    id: 'lunar-silver',
    name: 'Lunar Silver',
    brand: 'Monolith',
    collection: 'Monolith',
    price: 8200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmA4BZxgtzBQo9glIoVHrtGB0nh8AamCq7aEf7RuPhKf-tLftbqoX9XIBL7oGgg9nBYeAd-Z3AaNELRStRcOemtJhmr4V05El-uklHdDH4853G-ta_bJV8uLS-Oq6ItCaL3zB_-iotKEQtN0jCzOqcx2msa9YiS6tMpjVXQqf87n6S5a6FFEGCHOMKsAf4wCmuLjwcZRFkIhUZMd1PNAG0O5DkVmdf9ufKRsX4u8DTLnJFGdeEd3_famxumOV36a2MuPDo-c3oIQ8c',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmA4BZxgtzBQo9glIoVHrtGB0nh8AamCq7aEf7RuPhKf-tLftbqoX9XIBL7oGgg9nBYeAd-Z3AaNELRStRcOemtJhmr4V05El-uklHdDH4853G-ta_bJV8uLS-Oq6ItCaL3zB_-iotKEQtN0jCzOqcx2msa9YiS6tMpjVXQqf87n6S5a6FFEGCHOMKsAf4wCmuLjwcZRFkIhUZMd1PNAG0O5DkVmdf9ufKRsX4u8DTLnJFGdeEd3_famxumOV36a2MuPDo-c3oIQ8c',
    ],
    rating: 4.8,
    reviews: 12,
    inStock: true,
    description: 'Inspired by the celestial glow of moonlight, the Lunar Silver features a sandblasted dial with a sunray finish.',
    features: ['Automatic Movement', 'Moon Phase Complication', 'Water resistant to 50 meters'],
    specs: [
      { label: 'Movement', value: 'Calibre CH-3300 Auto' },
      { label: 'Case', value: '39mm Sterling Silver' },
      { label: 'Crystal', value: 'Sapphire' },
      { label: 'Strap', value: 'Calfskin Leather' },
    ],
  },
  {
    id: 'deep-azure',
    name: 'Deep Azure',
    brand: 'Navigator',
    collection: 'Navigator',
    price: 9500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2P7lEv0HRyCNpZvjTes5bBNb1mROo6GqobiZRcY3TOQi9moKv6XCMUVOdM0N76Bff8Qu27Y8i1qCI2mceQDDUWht3J6JdNHNGVQfwCJJLqbX1QTii7uKPChJmnwx6qWFkXOoaNSFqJ3o0_VdzPj4NnvJtuSHFWFSn_cl1fWhDlGgleCjoR-pH8JVHxbCQUM58UOtRQI__IC2Ht0AVCjZsa4_xeq_vkuwgZbUuifl4BJQA-_hhmoxlJHvGBvJ22_WRO-gXQhnHl4xs',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2P7lEv0HRyCNpZvjTes5bBNb1mROo6GqobiZRcY3TOQi9moKv6XCMUVOdM0N76Bff8Qu27Y8i1qCI2mceQDDUWht3J6JdNHNGVQfwCJJLqbX1QTii7uKPChJmnwx6qWFkXOoaNSFqJ3o0_VdzPj4NnvJtuSHFWFSn_cl1fWhDlGgleCjoR-pH8JVHxbCQUM58UOtRQI__IC2Ht0AVCjZsa4_xeq_vkuwgZbUuifl4BJQA-_hhmoxlJHvGBvJ22_WRO-gXQhnHl4xs',
    ],
    rating: 4.6,
    reviews: 15,
    inStock: true,
    description: 'A dive watch redefined for the discerning collector. Deep azure dial with luminous indices for unparalleled underwater legibility.',
    features: ['Dive Bezel', 'Water resistant to 300 meters', 'Helium Escape Valve'],
    specs: [
      { label: 'Movement', value: 'Calibre CH-6600 Auto' },
      { label: 'Case', value: '42mm Stainless Steel' },
      { label: 'Crystal', value: 'Sapphire, AR coated' },
      { label: 'Strap', value: 'NATO Nylon' },
    ],
  },
  {
    id: 'celestial-chronograph',
    name: 'The Celestial Chronograph',
    brand: 'Eterna Collection',
    collection: 'Eterna',
    price: 12450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTnghzKqIOyH8vvmAZagq1m9UtguoR99_IjaTsqhP2QmVg7kFI5uVTi6DNpcXsLMK0KPUK_rFwcgX6WYLYt8RQB3sftfaqqUDLIX1bxHaxyNolWW8_QMEQl74-41sNSJo3YHNrPesYQ1dfQEtC_7ybnZ6U5bK9KLEu6lZXnljHHahMY8ZSoqo0mHbLsWa69h2kj6CT_UQFTO5Kd8ba0cx88_jtdbUBiQBM3j3qIRRCOYYXiDzEpEqFKhqejXLQxfZXy6pBBKgArk1',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTnghzKqIOyH8vvmAZagq1m9UtguoR99_IjaTsqhP2QmVg7kFI5uVTi6DNpcXsLMK0KPUK_rFwcgX6WYLYt8RQB3sftfaqqUDLIX1bxHaxyNolWW8_QMEQl74-41sNSJo3YHNrPesYQ1dfQEtC_7ybnZ6U5bK9KLEu6lZXnljHHahMY8ZSoqo0mHbLsWa69h2kj6CT_UQFTO5Kd8ba0cx88_jtdbUBiQBM3j3qIRRCOYYXiDzEpEqFKhqejXLQxfZXy6pBBKgArk1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbABmrWFie9kDrmJ-dhoL_fzzRcaTIgciCX1Pe29EhnP-WWRgH3bYsehNf5a-sCh8SrXGwh_tt-XjQ-xgfXgHz8MUC1IMSPeLUbxetY1E3tULDkfJDKCcoojn0TQsy4O53XydkxOgDHSRDGb76rzqVhOlPYwxvWtEvFdaWkLsn49TctCYBllb0Ouq3qao26EqOl5jckDIeK-dx-v0P_SKyXo-mi64OfnBnAguQJlmvKhWs36QkZ1z7XYzL9ECUDm6dVOOoJqW6Dx5',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwJ7LtSdtEXdLxwGhnNN2vfbJmQfLSafsmQRVG558phxCyEVbOYMvztOsZ38aoYbiAAUhlbzMBT7MUIjcy-Jt4WduNj5-eFIrpHDUC-xrBH6YdSn5efCtg0D0eQuVJh7SNOT3FGhV_owpy1_E7I-GY9IhOJn4aB7jZ6CHprk-ipnzu9TdjgcqJz94kG3DMHYOTv7_i9SWdhnbunwRHtNqZFwIvEYwbLKwxC8YkDUj-5rennKSx4aD5ElBt6WzWALv2OO7Hn7rFGcgI',
    ],
    badge: 'Limited Edition',
    rating: 4.9,
    reviews: 24,
    inStock: true,
    description: 'Every Celestial Chronograph undergoes 400 hours of rigorous testing at our Geneva workshop. The oscillating weight is finished with Côtes de Genève circular graining.',
    features: ['72-Hour Power Reserve', 'Water resistant to 50 meters', 'Chronograph Function', 'Geneva Seal'],
    specs: [
      { label: 'Movement', value: 'Calibre CH-9401 Manual' },
      { label: 'Case', value: '41mm 18K Rose Gold' },
      { label: 'Crystal', value: 'Sapphire, AR coated' },
      { label: 'Strap', value: 'Alligator Leather' },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id: string, limit = 2): Product[] {
  return products.filter((p) => p.id !== id).slice(0, limit);
}
