"use client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useProductContext } from "../../contexts/ProductContext";
import IProduct from "@/utils/interface/IProductCard";

type BtnClass = "default" | "primary" | "secondary";

type AddToCartButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  product: IProduct;
  className?: string;
  children: React.ReactNode;
  variant?: BtnClass;
};

const buttonStyles: Record<BtnClass, string> = {
  default:
    "bg-custom-300 rounded-lg w-40 h-10 text-white font-semibold hover:bg-custom-400 transition duration-300 ease-in-out",
  primary:
    "bg-custom-200 rounded-lg w-40 h-10 text-white font-semibold hover:bg-custom-300 transition duration-300 ease-in-out",
  secondary:
    "bg-custom-100 rounded-lg w-40 h-10 text-black font-semibold hover:bg-custom-400 transition duration-300 ease-in-out",
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className,
  children,
  variant = "default",
  ...props
}) => {
  const { addProduct, products } = useProductContext();
  const addToCartHandler = () => {
    console.log("button is clicked");
    addProduct(product);
  };

  return (
    <button
      onClick={addToCartHandler}
      {...props}
      className={`${buttonStyles[variant as BtnClass]} ${className}`}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
