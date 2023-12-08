import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-20 px-20 shadow-lg">
        <h1>LOGGA</h1>
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
          <p>användare</p>
          <p>kundvagn</p>
        </div>
      </div>
    </>
  );
}
