import React from "react";

const Footercard = () => {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 w-full xl:w-[200px]  px-4 xl:items-center ">
        <div className="title-font text-center xl:text-left font-medium text-gray-100 tracking-widest text-sm mb-3">
        More features
        </div>
        <nav className="list-none text-center  xl:text-left mb-10 flex flex-col gap-[20px] ">
          <li>
            <a className="text-gray-400 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Footercard;
