import React from "react";

import ProductCard from "../../components/ProductCard/productCard";
import IProduct from "@/utils/interface/IProductCard";
import Link from "next/link";

export default async function products() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);

  return (
    <>
      <p>Productspage</p>

      <div className="flex flex-wrap w-3/4">
        {products.map((product: IProduct) => (
          <div className="ProductCardRender" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
