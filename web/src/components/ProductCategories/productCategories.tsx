import Image from "next/image";
import React from "react";
import IProduct from "@/utils/interface/IProductCard";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import Button from "../button/button";
import Link from "next/link";

function ProductCategories() {
  return (
    <div className="flex justify-center w-screen ">
      <nav className="bg-custom-400  m-5 p-5 rounded-md">
        <ul className="flex justify-center gap-4 text-white ">
          <li>
            <Link href={"/products/pots"}>
              <Button className="hover:text-custom-500" variant="primary">
                Skärbrädor
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/products/pots"}>
              <Button className="hover:text-custom-500" variant="primary">
                Knivar
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/products/pots"}>
              <Button className="hover:text-custom-500" variant="primary">
                Stekpannor
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/products/pots"}>
              <Button className="hover:text-custom-500" variant="primary">
                Kastruller
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductCategories;
