import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');
  
  let filteredProducts = products;
  
  if (search) {
    const q = search.toLowerCase();
    filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) || 
      p.collection.toLowerCase().includes(q)
    );
  }
  
  return NextResponse.json(filteredProducts);
}
