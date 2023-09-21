import React from "react";

import FoudersCard from "./FoudersCard";
const Feedback = () => {
  return (
    <div>
      <div className="founders flex flex-col px-[20px] py-[20px] justify-between  text-white md:w-full  md:items-center md:justify-center lg:px-[100px] lg:py-[100px]">
        <div className="founders-top flex flex-col  justify-between mb-[20px] xl:mb-[70px] md:w-2/3 lg:w-full lg:flex-row lg:flex lg:justify-between lg:items-center">
          <div className="top-left mb-[30px] lg:mb-[0px] items-center ">
            <h1 className="text-[30px] xl:text-[60px] font-bold letter-space tracking-wide">
              What people are
            </h1>
            <h1 className="text-[30px] xl:text-[60px] font-bold letter-space tracking-wide">
              saying about us
            </h1>
          </div>
          <div className="top-right flex items-center lg:w-2/3 xl:w-2/5">
            <p className="w-full text-[20px] text-gray-400 ">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between md:w-2/3  lg:flex-row lg:w-full  ">
        <FoudersCard
          quote="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          dp="./images/people01.png"
          name="Herman Jensen"
          position="Founder & Leader"
          bg='founder-one flex flex-col bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900 rounded-[20px]  px-[10px] py-[20px] xl:px-[40px] xl:py-[100px] xl:gap-[30px] '
        />


        <FoudersCard
          quote="It is usually people in the money business, finance, and international trade that are really rich."
          dp="./images/people02.png"
          name="Herman Jensen"
          position="Founder & Leader"
          bg='founder-one flex flex-col   px-[10px] py-[10px] xl:px-[40px] xl:py-[100px] xl:gap-[30px]'
        />
          <FoudersCard
          quote="It is usually people in the money business, finance, and international trade that are really rich."
          dp="./images/people03.png"
          name="Kenn Gallagher"
          position="Founder & Leader"
          bg='founder-one flex flex-col   px-[10px] py-[10px] xl:px-[40px] xl:py-[100px] xl:gap-[30px]'
        />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
