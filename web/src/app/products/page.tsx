
import React from "react";

import ProductCard from "../../components/ProductCard/productCard";

interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  img: string;
  imgAlt: string;
  price: number;
}

export default async function products() {

  const res = await fetch("http://localhost:3000/products", {cache: 'no-store'})
  const products = await res.json()  
  console.log(products);
  

  return <>
    <p>Productspage</p>

    <div className="flex flex-wrap w-3/4">
      {products.map((product: IProduct) => (
        <div className="ProductCardRender" key={product.id}>
          
            <ProductCard product={product} />
          
        </div>
      ))}
    </div>    

  
  </>
  
}

