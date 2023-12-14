import Link from "next/link";

import { LiaUserSolid } from "react-icons/lia";
import Image from "next/image";
import logo from "../../../public/logo.png";
import CartIcon from "../cart/cartIcon";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-20 px-20 shadow-lg bg-custom-300 text-white">
        <Link href={"/"}>
          <div className="flex justify-center items-center">
            <Image alt="Our logotype" src={logo} className="h-20 w-20" />
            <p className="text-xl uppercase">
              ottima<span className="text-custom-400">cucina</span>
            </p>
          </div>
        </Link>
        <nav>
          <ul className=" flex justify-between gap-16">
            <li className="hover:text-black">
              <Link href={"/products"}>Produkter</Link>
            </li>
            <li className="hover:text-black">
              <Link href={"/contact"}>Kontakt</Link>
            </li>
            <li className="hover:text-black">
              <Link href={"/admin"}>Admin</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <LiaUserSolid size={25} />
          <CartIcon />
        </div>
      </div>
    </>
  );
}
