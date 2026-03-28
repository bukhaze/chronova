import { NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = getProductById(params.id);

  if (!product) {
    return NextResponse.json(
      { error: 'Timepiece not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
