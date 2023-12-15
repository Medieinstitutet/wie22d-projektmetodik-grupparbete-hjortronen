import Link from "next/link";

import { LiaUserSolid } from "react-icons/lia";
import Image from "next/image";
import logo from "../../../public/logo.png";
import CartIcon from "../cart/cartIcon";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-24 px-20 shadow-lg bg-custom-300 text-white">
        <Link href={"/"}>
          <div className="flex justify-center items-center w-60">
            <Image alt="Our logotype" src={logo} className="h-20 w-20" />
            <p className="text-xl uppercase font-roboto">
              ottima<span className="text-custom-500">cucina</span>
            </p>
          </div>
        </Link>
        <nav>
          <ul className=" flex justify-between gap-16">
            <li className="hover:text-custom-500 ">
              <Link href={"/"}>Hem</Link>
            </li>
            <li className="hover:text-custom-500">
              <Link href={"/products"}>Produkter</Link>
            </li>
            <li className="hover:text-custom-500">
              <Link href={"/contact"}>Kontakt</Link>
            </li>

            <li className="hover:text-custom-500">
              <Link href={"#"}>Om Oss</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 w-60 justify-center">
          <LiaUserSolid size={25} className="hover:text-custom-500 cursor-pointer" />
          <CartIcon />
        </div>
      </div>
    </>
  );
}
