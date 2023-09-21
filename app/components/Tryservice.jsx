import React from 'react'

const Tryservice = () => {
  return (
    <div className='px-[20px] py-[20px]  lg:px-[100px] lg:py-[100px] '>
       <div className='Try-service xl:flex-row  flex flex-col justify-between items-center px-[30px] py-[50px] justify-between  text-white bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-[25px] '>
        <div className='try-ser-left '>
          <h1 className='text-[30px] lg:text-[30px] xl:text-[60px] font-bold letter-space tracking-wide'>Let’s try our service now!</h1>
          <p className='text-gray-400 xl:w-2/3 mt-8 w-full lg:w-[400px]  text-[20px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className="text-black mt-10 bg-gradient-to-tr from-cyan-500 via-cyan-600 to-white font-bold px-[40px] py-[20px] rounded-[12px]" >Get Started</button>
       </div>
    </div>
  )
}

export default Tryservice
