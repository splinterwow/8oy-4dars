import { FaArrowLeftLong } from "react-icons/fa6";





function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex pl-24 pt-5">
        <div className="items-center cursor-pointer bg-gray-200 w-10 rounded-full p-2">
          <FaArrowLeftLong className="text-gray-600 ml-1" />
        </div>
        <span className="text-gray-800 ml-10 font-medium mt-[2px]">Account verification</span>
        <span className="ml-10 text-[#6F6FFF] bg-[#5552D914] cursor-pointer rounded-md">In progress</span>
      </div>
      <hr  className="mt-7"/>
    </div>
  );
}

export default Navbar;
