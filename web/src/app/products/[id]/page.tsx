import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";
import Button from "@/components/button/button";

type ProductParams = {
  id: string;
};

async function getProduct(data: string) {
  const res = await fetch(`http://localhost:3000/products/${data}`, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function Product({ params }: { params: ProductParams }) {
  const product = await getProduct(params.id);

  return (
    <>
      <div className="flex">
        <div key={product.id} className="w-2/4 border m-10 rounded-xl shadow-[3px_6px_11px_6px_#00000024]">
        <Button><Link href={"/"}>Tillbaka</Link></Button>
          {/* <h3 className="mt-5 flex justify-center">{product.title}</h3> */}
          <Image
            src={product.img}
            width={666}
            height={500}
            alt={product.imgAlt}
          />
          {/* <p>{product.description}</p>
          <p className="font-bold mt-5">{product.price}:-</p>
          <p className="mt-5">Antal i lager: {product.storage}</p>
          <Button><AddToCartButton product={product} /></Button> */}
        </div>
        <div className=" w-2/4 flex flex-col justify-around pl-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p>{product.description}</p>
          <div className="flex">
            <h1 className="text-2xl font-bold mr-28">{product.price}kr</h1>
            <Button><AddToCartButton product={product} /></Button>
          </div>
          
        </div>
      </div>
    </>
  );
}
