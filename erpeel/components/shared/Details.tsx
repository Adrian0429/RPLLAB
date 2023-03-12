import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type KeyboardDetail = {
    imagepath:string;
    title:string;
    price:number;
    rating:number;


}


const Details = ({imagepath, title, price, rating} :KeyboardDetail) => {
  return (
    <div className='flex flex-col w-5/6 items-center justify-center'>
        <Image src={imagepath} height={256} width={1440} alt='/'/>
        
        <div className='flex flex-col w-full'>
            <p className='text-white font-bold text-6xl'>{title}</p>
            <p className='text-white font-semibold text-2xl'>{price}</p>
            <p className='text-white font-semibold text-xl'>{rating}</p>
            <p className='text-white'>desc?</p>
        </div>
    </div>
  )
}

export default Details