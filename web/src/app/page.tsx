import { Carousel } from "antd";
import Image from "next/image";
import karusell1 from "./assets/Julklapps tips.jpg";
import karusell2 from "./assets/2.jpg";
import karusell3 from "./assets/3.jpg";

export default function Home() {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel autoplay>
        <div>
          <h1 className="absolute items-center">hej</h1>
          <Image src={karusell1} width={2000} alt="Jul kampanj" />
        </div>
        <div>
          <Image src={karusell2} width={2000} alt="Jul kampanj" />
        </div>
        <div>
          <Image src={karusell3} width={2000} alt="Jul kampanj" />
        </div>
      </Carousel>
    </>
  );
}
