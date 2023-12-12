"use client";
import React, { ReactNode, useState } from "react";
import { ProductContext } from "./ProductContext";
import IProduct from "@/utils/interface/IProductCard";

interface IProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log("logging products before addProduct :", products);
  const addProduct = (product: IProduct) => {
    console.log("Adding product:", product); // Log to check if the function is called
    setProducts([...products, product]);
    console.log("Updated products:", products.length); // Log to check the updated state
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
