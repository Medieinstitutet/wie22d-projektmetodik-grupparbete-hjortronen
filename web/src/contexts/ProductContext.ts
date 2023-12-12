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

// Fortsätt titta på https://www.youtube.com/watch?v=Ho3FFUbk9_w

// client compoents with Dave https://www.youtube.com/watch?v=PcHY2Py6AQY&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=5
