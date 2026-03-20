import Link from 'next/link';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

export default async function Home() {
  const data = await getProducts();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
      }}>
        {data.products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.thumbnail} width="100%" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <Link href={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}