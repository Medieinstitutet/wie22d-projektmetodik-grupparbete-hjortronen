import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import karusell1 from "./assets/Julklapps tips.jpg";
import karusell2 from "./assets/2.jpg";
import karusell3 from "./assets/3.jpg";

export default function Home() {
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
    </>
  );
}
