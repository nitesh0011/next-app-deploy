import React from "react";
import Image from "next/image";
import Footercard from "./Footercard";
const Footer = () => {
  return (
    <div className="flex flex-wrap  justify-between xl:px-[100px] xl:py-[100px] ">
      <Footercard/>
      <Footercard/>
      <Footercard/>
      <Footercard/>
   </div>
  );
};

export default Footer;
