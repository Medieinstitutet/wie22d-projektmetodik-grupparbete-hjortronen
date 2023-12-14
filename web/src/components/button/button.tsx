import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type BtnClass = "default" | "primary" | "secondary";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
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

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  variant = "default",
  ...props //
}) => {
  return (
    <button
      {...props}
      className={`${buttonStyles[variant as BtnClass]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
