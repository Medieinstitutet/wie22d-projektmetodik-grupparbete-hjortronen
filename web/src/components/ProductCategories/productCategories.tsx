import Image from "next/image";
import React from "react";
import IProduct from "@/utils/interface/IProductCard";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import Button from "../button/button";
import Link from "next/link";

function ProductCategories() {
  return (
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
  );
}

export default ProductCategories;
