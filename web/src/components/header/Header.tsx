import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import Image from "next/image";
import logo from '../../../public/logo.jpeg'


export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-20 px-20 shadow-lg">
       <Link href={"/"}>
        <div className="flex">
          <Image alt='Our logotype' src={logo} className="h-20 w-20" />
          <p className="text-xl">ottima cucina</p>
        </div>
        </Link>
        <nav>
          <ul className=" flex justify-between gap-16">
            <li className="hover:text-green-900">
              <Link href={"/"}>Produkter</Link>
            </li>
            <li className="hover:text-green-900">
              <Link href={"/"}>Kontakt</Link>
            </li>
            <li className="hover:text-green-900">
              <Link href={"/"}>Admin</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <LiaUserSolid size={25} />
          <FaOpencart size={25} />
        </div>
      </div>
    </>
  );
}
