"use client";
import React from "react";
import { useProductContext } from "../../contexts/ProductContext";
import IProduct from "@/utils/interface/IProductCard";

interface AddToCartButtonProps {
  product: IProduct;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addProduct, products } = useProductContext();
  const addToCartHandler = () => {
    console.log("button is clicked");
    addProduct(product);
  };

  return (
    <button
      onClick={addToCartHandler}
    >
      Köp nu
    </button>
  );
};

export default AddToCartButton;
