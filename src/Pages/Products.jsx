import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import ProductsSection from '../components/ProductsSection'
const Products = () => {
  return (
    <>
    <div className='products'>
        <div className='products-layer'>
        <Navbar/>
            <div className='text-center'>
            <p className='text-fuchsia-300 font-extrabold text-3xl pt-12'>Our Products</p>
            <p className='font-semibold text-xl py-6'>Here we show some of our own products</p>
            <div className='bg-slate-500 text-fuchsia-300 flex justify-evenly mt-12 py-4'>
                <p>*Made from natural materials</p>
                <p>*Suitable for all skin types</p>
            </div>
            <p className='mt-20'>To Order <button className='bg-fuchsia-300 px-4 py-2 rounded-full'><Link to={'/contact-us'}>Contact Us</Link></button></p>
            <p className="mt-28 text-base leading-6 text-center text-white">
            © 2023 Salony.
        </p>
            </div>
        </div>
    </div>
    <ProductsSection/>
    </>
  )
}

export default Products
