import React from "react";
import ProductCategories from "../../../components/ProductCategories/productCategories";
import ProductCard from "../../../components/ProductCard/productCard";
import IProduct from "@/utils/interface/IProductCard";
import Link from "next/link";

export default async function products() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  let specProductCategory = products.filter((product: IProduct) => {
    return product.category == "boards";
  });

  return (
    <>
      <ProductCategories />
      <div className="flex flex-wrap  w-screen  justify-center">
        {specProductCategory.map((product: IProduct) => (
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
