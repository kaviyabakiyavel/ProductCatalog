'use client';

import { useCart } from '../context/CartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      style={{
        padding: '10px 15px',
        background: 'green',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      Add to Cart
    </button>
  );
}