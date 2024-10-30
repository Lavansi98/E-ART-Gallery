import React, { useContext, useEffect, useState } from 'react';
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestseller, setBestseller] = useState([]);

    useEffect(()=>{
        console.log(products);
        
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestseller(bestProduct.slice(0,5));
        console.log(bestProduct);
        
        
    },[products])

  return (
    <div className='my-10 mx-5'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'ARTISTS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> Explore our best-selling products, handpicked by art enthusiasts just like you. These top choices showcase the most sought-after pieces, reflecting the creativity and talent of our local artists.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                bestseller.map((item, index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller