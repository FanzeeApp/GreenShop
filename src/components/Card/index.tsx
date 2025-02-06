import type { Card as CardType } from "../../interfaces";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const Card: React.FC<CardType> = ({ name, price, imgUrl, _id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    if (price === undefined) return; 

    dispatch(
      addToCart({
        id: _id,
        name,
        price: price ?? 0,
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-col items-start gap-[12px]">
        <div className="w-[258px] h-[300px] bg-[#FBFBFB] relative overflow-hidden group">
      <NavLink to={`/details/${_id}`}>
          <img
            src={imgUrl}
            className="w-[250px] h-[250px] object-cover"
            alt={name}
          />
              </NavLink>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-70  text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      <p className="text-[rgb(61,61,61)] font-[Cera Pro] text-[16px] font-normal leading-[16px] tracking-[0%] text-left">
        {name}
      </p>
      <p className="text-[rgb(70,163,88)] font-[Cera Pro] text-[18px] font-bold leading-[16px] tracking-[0%] text-left">
        ${price ?? 0}
      </p>
    </div>
  );
};

export default Card;
