async function getProducts() {
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function products() {
  const products = await getProducts();
  console.log("Logging products", products);
  return (
    <>
      <h1>Product Page</h1>
      {products.map((product: any) => {
        <div key={product.id}>
          <h3>{product.product}</h3>
          <p>{product.description}</p>
        </div>;
      })}
    </>
  );
}
