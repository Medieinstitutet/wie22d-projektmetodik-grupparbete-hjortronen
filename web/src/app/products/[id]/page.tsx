import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";

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
      <div className="m-10 w-2/4 flex justify-center border">
        <div key={product.id}>
        <Link className="mt-5 border-solid border-2 p-1 border-sky-500" href={"/"}>Tillbaka</Link>
          <h3 className="mt-5 flex justify-center">{product.title}</h3>
          <Image
            src={product.img}
            width={666}
            height={500}
            alt={product.imgAlt}
          />
          <p>{product.description}</p>
          <p className="font-bold mt-5">{product.price}:-</p>
          <p className="mt-5">Antal i lager: {product.storage}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );
}
