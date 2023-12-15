"use client";
import React, { ReactNode, useState } from "react";
import { ProductContext } from "./ProductContext";
import IProduct from "@/utils/interface/IProductCard";

interface IProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const addProduct = (product: IProduct) => {
    setProducts([...products, product]);
    };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
