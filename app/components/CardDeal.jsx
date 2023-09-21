import React from "react";
import Image from "next/image";
const CardDeal = () => {
  return (
    <>
      <div className="billing flex flex-col px-[20px] mt-[50px] py-[20px] justify-between items-center  lg:flex-row-reverse lg:px-[100px] lg:py-[100px]">
      <div>
        <Image src="./images/card.png" alt="card" width={300} height={300} className="lg:w-[500px] xl:w-[600px] pr-[20px]"   />

      </div>

        <div className="billing-right text-white flex flex-col mt-[20px] md:flex-col md:items-center md:w-2/3 xl:w-2/4">
          <div className="md:flex md:flex-col md:w-full">
          <h1 className="text-[40px] xl:text-[50px]  font-bold letter-space tracking-wide ">
          Find a better card deal 
          </h1>
          <h1 className="text-[40px] xl:text-[50px]  font-bold letter-space tracking-wide ">
          in few easy steps.
          </h1>
          </div>
          <div className="text-gray-400 mt-10  text-[20px]  ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          <div className="icons mt-[20px]  ">
          <button className="text-black mt-10 bg-gradient-to-tr from-cyan-500 via-cyan-600 to-white font-bold px-[40px] py-[20px] rounded-[12px]" >Get Started</button>

          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDeal;
