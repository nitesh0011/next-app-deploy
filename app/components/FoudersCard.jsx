import React from 'react'
import Image from 'next/image'
const FoudersCard = ({quote,dp,name,position,bg}) => {
  return (
    <div >
      <div className='founders-down  flex  items-center mb-[30px] xl:w-[400px] '>
          <div className={bg}>
            <Image src='./images/quotes.svg' alt='quote' height={50} width={50}/>
            <p className='w-full text-[20px] leading-10 xl:w-full  '>{quote}</p>
            <div className='dp flex gap-[20px]'>
              <Image src={dp} alt='dp' height={50} width={50}/>
              <div>
                <h1 className='text-[20px]'>{name}</h1>
                <p className='text-gray-400'>{position}</p>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default FoudersCard
