import Image from 'next/image'
import React from 'react'
import IProduct from "@/utils/interface/IProductCard";



function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="border-solid border-2 border-sky-500 w-64 m-10 h-96">
        <p className="text-center">{product.title}</p>
        <Image
            src={product.img}
            width={500}
            height={500}
            alt={product.imgAlt}
        />
        <p className="text-center p-5">{product.description}</p>
        <p className="text-center mt-1 ">{product.price}</p>
        <div className='flex justify-end align-bottom'>
          
          <button className="m-1 border-solid border-2 border-sky-500">Köp</button>

        </div>
    </div>
  )
}

export default ProductCard