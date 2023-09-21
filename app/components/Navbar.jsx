import Image from "next/image";
const Navbar = () => {

  return (
    <nav className='text-gray-600 body-font flex justify-between items-center xl:justify-evenly '>
      <div className='flex px-[20px] py-[20px] md:px-[80px] md:py-[40px] lg:px-[100px] lg:py-[50px] w-full justify-between'>
        <div className="">
          < Image src="./images/logo.svg" alt="logo" height={100} width={120} />
        </div>
        <div className='lg:flex hidden md:block lg:block xl:block md:flex  mt-4 md:mt-0'>
          <ul className="flex  text-gray-100 text-[20px] lg:flex-row lg:gap-[40px] md:flex-row xl:flex-row flex-col gap-[20px] text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className=" block lg:hidden md:hidden xl:hidden text-white ">
          |||
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
