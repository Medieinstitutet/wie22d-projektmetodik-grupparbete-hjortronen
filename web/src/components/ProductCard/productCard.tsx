import Image from "next/image";
import React from "react";
import IProduct from "@/utils/interface/IProductCard";

import Button from "../button/button";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="flex flex-col justify-between w-80 m-10 h-96 pb-5 rounded-xl shadow-[3px_6px_11px_6px_#00000024]">
      <Image
        src={product.img}
        width={400}
        height={400}
        alt={product.imgAlt}
        className="pl-14 pt-4 pr-14 "
      />
      <div className="flex-col pr-7 pl-7 pt-2">
        <div className="pb-6">
          <h1 className="text-2xl">{product.title}</h1>
        </div>
        <div className="flex justify-between ">
          <p className="pl-1 pt-1 text-xl ">{product.price}:-</p>
          <Button variant="primary">Köp</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
