'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 30px',
      background: '#111',
      color: '#fff'
    }}>
      <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
        Home
      </Link>

      <div>Cart: {cart.length}</div>
    </nav>
  );
}