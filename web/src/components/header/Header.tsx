import Link from "next/link";

import { LiaUserSolid } from "react-icons/lia";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import CartIcon from "../cart/cartIcon";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-20 px-20 shadow-lg">
        <Link href={"/"}>
          <div className="flex">
            <Image alt="Our logotype" src={logo} className="h-20 w-20" />
            <p className="text-xl">ottima cucina</p>
          </div>
        </Link>
        <nav>
          <ul className=" flex justify-between gap-16">
            <li className="hover:text-green-900">
              <Link href={"/products"}>Produkter</Link>
            </li>
            <li className="hover:text-green-900">
              <Link href={"/contact"}>Kontakt</Link>
            </li>
            <li className="hover:text-green-900">
              <Link href={"/admin"}>Admin</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <LiaUserSolid size={25} />
          <CartIcon />
        </div>
      </div>
    </>
  );
}
