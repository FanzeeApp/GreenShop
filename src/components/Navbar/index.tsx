import { IoMdLogIn } from 'react-icons/io';
import Logo from '../../assets/Logo.svg';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/store';
import { useRef, useState } from 'react';

const Navbar = () => {
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const searchIconRef = useRef<SVGSVGElement | null>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (searchInputRef.current?.value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className="xl:h-[56px] p-[10px] border-b-1 border-green-800 border-opacity-70">
      <div className="xl:container flex flex-row items-center justify-between">
        <img src={Logo} alt="Logo" className="h-full" />
        <nav className="Navbar xl:flex flex-row gap-[50px] text-[rgb(61,61,61)] font-[Cera Pro] text-[16px] h-[24px] font-normal leading-[20px] text-left">
          <a className="text-gray-800 hover:text-black hover:border-b-3 hover:border-green-500 border-transparent transition-all duration-100" href="/">
            Home
          </a>
          <a className="xl:text-gray-800 hover:text-black hover:border-b-3 hover:border-green-500 border-transparent transition-all duration-100" href="/shop">
            Shop
          </a>
          <a className="xl:text-gray-800 hover:text-black hover:border-b-3 hover:border-green-500 border-transparent transition-all duration-100" href="/plantcare">
            Plant Care
          </a>
          <a className="xl:text-gray-800 hover:text-black hover:border-b-3 hover:border-green-500 border-transparent transition-all duration-100" href="/blogs">
            Blogs
          </a>
        </nav>
        <div className="navBtn xl:flex flex-row items-center gap-[30px] h-full">
          <div
            ref={searchContainerRef}
            className={`relative transition-all ${isFocused ? 'w-64 bg-white' : 'w-12'} `}
          >
            <input
              type="text"
              placeholder="Search..."
              id="searchInput"
              ref={searchInputRef}
              className={`w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none transition-all border-gray-300 ${isFocused ? 'border-blue-500' : ''}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                ref={searchIconRef}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 text-gray-400 transition-all ${isFocused ? 'text-blue-500' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="relative" onClick={handleCartClick}>
            <BsCart3 className="xl:text-gray-700 text-2xl w-[24px] h-[24px]" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {totalQuantity}
              </span>
            )}
          </div>
          <button className="xl:flex items-center bg-green-500 text-white px-4 py-2 rounded-[10px] text-[16px]">
            <IoMdLogIn className="xl:text-xl mr-2 w-[24px] h-[24px]" /> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
