import React from "react";
import { Navbar,Heading ,Users,GetStarted ,Billing, CardDeal,Feedback,Companies,Tryservice,Footer} from "./components";


const Page = () => {
  return (
    <div  className="bg-gradient-to-l from-gray-700 via-gray-900 to-black w-screen ">
      <Navbar />
      <Heading/>
      <Users/>
      <GetStarted/>
      <Billing/>
      <CardDeal/>
      <Feedback/>
      <Companies/>
      <Tryservice/>
      <Footer/>
    </div>
  );
};

export default Page;
