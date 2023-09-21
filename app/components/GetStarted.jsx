import React from "react";
import Image from "next/image";
const GetStarted = () => {
  return (
    <>
      <div className="Get_started flex flex-col md:items-center  gap-[50px] py-[20px] px-[20px] justify-between lg:px-[100px] lg:py-[100px]  lg:flex lg:flex-row xl:w-full xl:justify-evenly ">
      
        <div className="Gt-left text-white lg:w-1/7 lg:flex lg:flex-col lg:gap-[30px] xl:w-2/3 md:w-2/3 xl:flex xl:flex-col xl:gap-[50px] ">
          <h1 className=" text-[30px] lg:text-[35px] xl:text-[50px] md:text-3xl font-bold letter-space tracking-wide">You do the business,</h1>
          <h1 className=" text-[30px] lg:text-[35px] xl:text-[50px] md:text-3xl font-bold letter-space tracking-wide">well handle the money.</h1>
          <p className="text-gray-400 mt-10 xl:text-[20px] ">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="text-black mt-10 bg-gradient-to-tr from-cyan-500 via-cyan-600 to-white font-bold px-[40px] py-[20px] rounded-[12px] xl:w-1/4 lg:w-2/5" >Get Started</button>
        </div> 

         <div className="Gt-right lg:w-1/2 xl:w-2/5 md:w-2/3 md:gap-[40px] text-white py-[20px] flex flex-col gap-[30px] justify-between  ">
          <div className="rewards flex items-center lg:px-[20px]    ">
            <div className="logo px-[20px] py-[20px]">
              <Image src='./images/Star.svg' alt="start" height={70} width={70} className="md:h-[50px] md:w-[50px] lg:w-[70px] lg:h-[70px]  xl:w-[50px] xl:h-[50px]"/>
            </div>
            <div className="flex flex-col  ml-[5px]">
            <div className="r-h1 text-[20px] font-bold mb-[5px]">Rewards</div>
            <div className="r-p">The best credit cards offer some tantalizing combinations of promotion and prizes</div>
            </div>
          </div>

          <div className="Secured lg:px-[20px]  flex items-center  py-[15px] bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-[25px]">
            <div className="logo px-[10px] py-[20px]">
              <Image src='./images/Shield.svg' alt="shield" height={70} width={70}  className="md:h-[50px] md:w-[50px] lg:w-[70px] lg:h-[70px] xl:w-[50px] xl:h-[50px]"/>
            </div>
            <div className="flex flex-col  ml-[5px]">
            <div className="r-h1 font-bold mb-[5px]">100% Secured</div>
            <div className="r-p">We take proactive steps make sure your information and transactions are secure.</div>
            </div>
          </div>

          <div className="Balance flex items-center ">
            <div className="logo px-[10px] py-[20px]">
              <Image src='./images/Send.svg' alt="send" height={70} width={70}  className="md:h-[50px] md:w-[50px] lg:w-[70px] lg:h-[70px]  xl:w-[50px] xl:h-[50px]"/>
            </div>
            <div className="flex flex-col ml-[5px]">
            <div className="r-h1 font-bold mb-[5px]">Balance Transfer</div>
            <div className="r-p">A balance transfer credit card can save you a lot of money in interest charges.</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
