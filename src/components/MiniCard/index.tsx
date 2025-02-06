import { MiniProduct } from "../../interfaces";

const MiniCard = ({ image, name, desc, sana, minute }: MiniProduct) => {
  return (
    <div className="w-[268px] h-auto bg-[#FBFBFB] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-[180px] object-cover"
      />

      <div className="p-4">
        <p className="text-green-600 text-[14px] font-medium">
          {sana} | Read in {minute} minutes
        </p>
        <h3 className="text-[20px] font-bold text-gray-900 mt-2">
          {name}
        </h3>
        <p className="text-[16px] text-gray-600 mt-2 leading-[22px]">
          {desc}
        </p>
        <button className="mt-4 text-black font-medium flex items-center gap-2">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default MiniCard;
