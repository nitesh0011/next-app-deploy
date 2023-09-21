import React from "react";
import Image from "next/image";
const Billing = () => {
  return (
    <>
      <div className="billing flex flex-col mt-[50px] px-[20px] py-[20px] justify-between items-center lg:flex-row lg:px-[100px] lg:py-[100px]">
      <div>
        <Image src="./images/bill.png" alt="bill" width={300} height={300} className="lg:w-[500px] xl:w-[700px]"   />

      </div>

        <div className="billing-right text-white flex flex-col mt-[20px] md:flex-col md:items-center md:w-2/3 xl:w-2/4">
          <div className="md:flex md:flex-col md:w-full">
          <h1 className="text-[40px] xl:text-[55px]  font-bold letter-space tracking-wide ">
            Easily control your
          </h1>
          <h1 className="text-[40px] xl:text-[55px]  font-bold letter-space tracking-wide ">
            billing and invoicing.
          </h1>
          </div>
          <div className="text-gray-400 mt-10  text-[20px]  ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          <div className="icons mt-[20px] flex flex-row md:flex-row md:gap-[50px] md:mt-[20px]  ">
            <Image src="./images/apple.svg" alt="apple" height={200} width={150} className="md:w-1/4" />
            <Image src="./images/google.svg" alt="google" height={200} width={150} className="md:w-1/4" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
