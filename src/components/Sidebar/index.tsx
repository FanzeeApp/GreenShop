import GreenButton from "../GreenButton";
import Banner from "../../assets/Super Sale Banner.svg";

interface SidebarProps {
  categoryCount: { [key: string]: number };
  setCategory: (category: string) => void;
  selectedCategory: string;
}

const Sidebar = ({ categoryCount, setCategory, selectedCategory }: SidebarProps) => {
  return (
    <div className="w-[350px] mt-5 p-4 bg-[#FBFBFB]">
      <div className="mb-6 flex flex-col items-start gap-[10px]">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className="space-y-2 text-gray-700 pl-5 flex flex-col gap-1 w-[310px]">
          {Object.keys(categoryCount).map((name) => (
            <li
              key={name}
              onClick={() => setCategory(name)}
              className={`flex justify-between cursor-pointer ${
                selectedCategory === name ? "text-green-600 font-bold" : "hover:text-green-600"
              }`}
            >
              {name} ({categoryCount[name] || 0})
            </li>
          ))}
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

      <img src={Banner} className="w-[400px] h-auto mt-[20px]" />
    </div>
  );
};

export default Sidebar;
