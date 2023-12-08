import Link from "next/link";
import ProductCard from "../components/ProductCard/productCard";
import IProduct from "@/interface/IProductCard";

export default async function Home() {



  const res = await fetch("http://localhost:3000/products", {cache: 'no-store'})
  const products = await res.json()  

  return (
    <>
      <h1>Startpage</h1>
      <div className="flex flex-wrap w-3/4">
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
