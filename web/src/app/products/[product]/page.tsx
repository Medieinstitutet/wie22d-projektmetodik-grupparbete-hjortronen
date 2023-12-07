export default function product({ params }: { params: { product: string } }) {
  const product = params.product;

  return <div>My product: {product}</div>;
}
