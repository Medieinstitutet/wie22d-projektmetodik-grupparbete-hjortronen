import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import karusell1 from "./assets/Julklapps tips.jpg";
import karusell2 from "./assets/2.jpg";
import karusell3 from "./assets/3.jpg";
import ProductCard from "../components/ProductCard/productCard";
import IProduct from "@/utils/interface/IProductCard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <>
      <Carousel autoplay>
        <Link href={"/products"}>
          <div>
            <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Årets Julklapp
            </h1>
            <Image src={karusell1} width={2000} alt="Jul kampanj" />
          </div>
        </Link>
        <Link href={"/products"}>
          <div>
            <Image src={karusell2} width={2000} alt="Jul kampanj" />
          </div>
        </Link>
        <Link href={"/products"}>
          <div>
            <Image src={karusell3} width={2000} alt="Jul kampanj" />
          </div>
        </Link>
      </Carousel>

      <div className="flex flex-wrap w-screen justify-center">
        {products.map((product: IProduct) => (
          <div className="ProductCardRender" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
