import React from 'react'
import { productData } from '../Data/ProductData'
import { Link } from 'react-router'

export default function Product() {
  return (
    <section className='py-10'>
        <h1 className='text-center font-bold text-uppercase text-3xl pb-5'>Our Products</h1>
        <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-2'>
            
            {
                productData.map((obj, index)=><ProductItems key={index} data={obj}/>)
            }
        </div>
    </section>
  )
}

function ProductItems({data}){
    let {thumbnail,title, price, id} = data
        return(
            <div className='shadow-lg'>
                <Link to={`/product-details/${id}`}>
                <img src={thumbnail} alt="" />
                <div className='p-3'>
                    <h3>{title}</h3>
                    <h3>Rs. {price}</h3>
                </div>
                </Link>
            </div>
        )
}
