import React from 'react'
import ProductCard from './ProductCard'
import { data } from '../data'
const ProductsSection = () => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 pb-6 bg-slate-500'>
      {data.map((product)=>{
        return(
            <>
            <ProductCard product={product}/>
            </>
        )
      })}
    </div>
  )
}

export default ProductsSection
