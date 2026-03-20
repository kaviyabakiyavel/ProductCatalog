import AddToCartButton from '../../components/AddToCartButton';

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product`);
  }

  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
 const product = await getProduct(id);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} width="300" />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <AddToCartButton product={product} />
    </div>
  );
}