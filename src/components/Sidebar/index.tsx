import GreenButton from "../GreenButton";
import Banner from "../../assets/Super Sale Banner.svg"

const Sidebar = ({size}: {size: string}) => {
    return (
      <div className="w-[350px] mt-5 p-4 bg-[#FBFBFB]">
        <div className="mb-6 flex flex-col items-start gap-[10px]">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <ul className="space-y-2 text-gray-700 pl-5 flex flex-col gap-1 w-[310px]">
            <li className="flex justify-between text-green-600 font-bold">
              House Plants <span>(33)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Potter Plants <span>(12)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Seeds <span>(65)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Small Plants <span>(39)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Big Plants <span>(23)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Succulents <span>(17)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Terrariums <span>(19)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Gardening <span>(13)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Accessories <span>(18)</span>
            </li>
          </ul>
        </div>
  
        <div className="mb-6 flex items-start flex-col gap-[10px]">
          <h2 className="font-semibold mb-3">Price Range</h2>
          <input type="range" className="w-[300px] ml-5 cursor-pointer" />
          <p className="ml-5 text-gray-700 mt-2">
            Price: <span className="text-green-600 font-semibold">$39 – $1230</span>
          </p>
          <div className="ml-5">
          <GreenButton title="Filter" width={90} height={35} />
          </div>
        </div>
  
        <div className="flex flex-col items-start w-[310px]">
          <h2 className="text-lg font-semibold mb-3">Size</h2>
          <ul className="space-y-2 text-gray-700 w-[310px] ml-5 pr-5">
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Small <span>(119)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Medium <span>(86)</span>
            </li>
            <li className="flex justify-between hover:text-green-600 cursor-pointer">
              Large <span>(78)</span>
            </li>
          </ul>
        </div>
        <img src={Banner} className="w-[400px] h-auto mt-[20px]" />
      </div>
    );
  };
  
  export default Sidebar;
  