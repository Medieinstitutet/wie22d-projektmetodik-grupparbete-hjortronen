type ProductParams = {
  id: string;
};

async function getProduct(data: string) {
  console.log("Logging data ", data);
  const res = await fetch(`http://localhost:4000/products/${data}`, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}
export default async function product({ params }: { params: ProductParams }) {
  console.log("loggar params", params);
  const product = await getProduct(params.id);
  console.log(product);
  return (
    <div>
      <h1>Single Product Page</h1>
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
