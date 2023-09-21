import React from "react";
import Image from "next/image";
const Heading = () => {
  return (
    <>
      <div className=" md:flex-row flex flex-col justify-between py-[20px] px-[20px] lg:pl-[100px] lg:pr-[0px] lg:pt-[100px] lg:pb-[50px] md:flex  xl:w-full lg:px-[100px] lg:py-[100px]   ">

        <div className="heading_left flex flex-col items-center gap-[20px] lg:flex lg:flex-col lg:gap-[50px] lg:items-start lg:w-[580px] ">
          <div className="left_first flex  mb-[20px] w-full">
            <div className=" text-sm flex  flex-wrap gap-[5px] items-center font-medium px-5 rounded-xl py-2  text-white bg-gray-900">
              20%
              <span className="text-gray-400"> DISCOUT FOR</span> 1 MONTH
              <span className="text-gray-400"> ACCOUNT</span>
            </div>
          </div>

          <div className="left_second text-4xl  w-full font-bold pb-[20px] md:text-[40px] md:flex md:flex-col md:gap-[30px] lg:text-[60px] xl:text-[80px] lg:flex lg:flex-col lg:gap-[60px] lg:w-[600px] xl:w-[700px] ">
            <p className="text-white">The Next</p>
            <span className="text-cyan-400 from-blue-400 via-blue-100 to-blue-300">
              Generation
            </span>
            <p className="text-white ">Payment Method.</p>
          </div>

          <div className="left_third text-white w-full text-xl text-gray-300 lg:w-full lg:text-2xl   ">
          <p className=" lg:w-[600] xl:w-[700px] lg:text-[20px]">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
          </div>
        </div>

        <div className="heading_right pt-[20px] lg:pt-[0px]  ">
          <Image src="./images/robot.png"  width={650} height={600} alt="robot_picture"  />
        </div>

      </div>
    </>
  );
};

export default Heading;
