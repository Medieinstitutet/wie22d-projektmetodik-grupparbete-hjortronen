"use client";
import { createContext, useContext } from "react";
import IProduct from "@/utils/interface/IProductCard";

export type ProductContextType = {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: (product) => {},
});

export const useProductContext = () => useContext(ProductContext);
