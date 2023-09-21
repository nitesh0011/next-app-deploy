import React from "react";

const Users = () => {
  return (
    <>
<div className="flex flex-col md:flex-row justify-between px-4 md:px-8 py-4 items-center lg:px-[100px] lg:gap-[30px] ">
  <div className=" flex gap-[20px] items-center text-center md:text-left mb-4 md:mb-0">
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold py-0.5 text-white">3800+</h1>
    <span className="text-cyan-400">USER ACTIVE</span>
  </div>
  <div className="hidden  lg:block xl:block 2xl: block  bg-gray-100 w-[2px] h-[20px] "></div>
  <div className=" flex gap-[20px] items-center text-center md:text-left mb-4 md:mb-0">
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold py-0.5 text-white">230+</h1>
    <span className="text-cyan-400">TRUST BY COMPANIES</span>
  </div>
  <div className=" hidden  lg:block xl:block 2xl: block bg-gray-100 w-[2px] h-[20px]"></div>
  <div className=" flex gap-[20px] items-center text-center md:text-left">
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold py-0.5 text-white">₹230M+</h1>
    <span className="text-cyan-400">TRANSACTION</span>
  </div>
</div>

    </>
  );
};

export default Users;
