import Image from "next/image";
import React from "react";
import IProduct from "@/utils/interface/IProductCard";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className=" borde w-80 m-10 h-96 rounded-xl shadow-[3px_6px_11px_6px_#00000024] ">
      <Image
        src={product.img}
        width={400}
        height={400}
        alt={product.imgAlt}
        className="pl-12 pt-7 pr-12 pb-5"
      />
      <div className="flex-col pr-9 pl-9 pb-">
        <div className="pb-6">
          <h1 className="text-2xl">{product.title}</h1>
        </div>
        <div className="flex justify-between ">
          <p className="text-xl">{product.price}:-</p>
          <button className="m-1 border-solid border-2 border-sky-500">
            Köp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
