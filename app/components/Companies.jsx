import React from 'react'
import Image from 'next/image'
const Companies = () => {
  return (
    <div className='flex  px-[20px] py-[20px] justify-between items-center lg:px-[100px] lg:py-[100px]  '>
      <div className='companies flex flex-col md:flex  md:flex-row  justify-between items-center w-full px-[20px] py-[20px]'>
         <Image src='./images/airbnb.png' alt='airbanb' height={200} width={200} className='md:w-[130px] lg:w-[160px]' />
         <Image src='./images/binance.png' alt='binance' height={200} width={200} className='md:w-[130px] lg:w-[160px]' />
         <Image src='./images/coinbase.png' alt='coinbase' height={200} width={200} className='md:w-[130px] lg:w-[160px]' />
         <Image src='./images/dropbox.png' alt='dropbox' height={200} width={200} className='md:w-[130px] lg:w-[160px]'/>
      </div>
    </div>
  )
}

export default Companies
