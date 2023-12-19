"use client";
import { FaOpencart } from "react-icons/fa";
import { useProductContext } from "@/contexts/ProductContext";

const CartIcon = () => {
  const { products } = useProductContext();
  const totalItemsInProducts = products.length || 0;
  return (
    <div className="flex">
      <FaOpencart size={25} />
      <span className="ml-4">{totalItemsInProducts}</span>
    </div>
  );
};

export default CartIcon;
