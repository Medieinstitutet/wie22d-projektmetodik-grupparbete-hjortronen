import React from "react";

import ProductCard from "../../components/ProductCard/productCard";
import IProduct from "@/utils/interface/IProductCard";
import Link from "next/link";
import Button from "@/components/button/button";

export default async function products() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);

  return (
    <>
      <div className="flex justify-center w-screen ">
        <nav className="bg-custom-400  m-5 p-5">
          <ul className="flex justify-center gap-4 text-white ">
            <li>
              <Button variant="primary">
                <Link
                  className="hover:text-custom-500"
                  href={"/products/boards"}
                >
                  Skärbrädor
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="primary">
                <Link
                  className="hover:text-custom-500"
                  href={"/products/knives"}
                >
                  Knivar
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="primary">
                <Link className="hover:text-custom-500" href={"/products/pans"}>
                  Stekpannor
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="primary">
                <Link className="hover:text-custom-500" href={"/products/pots"}>
                  Kastruller
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-wrap w-screen justify-center">
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
