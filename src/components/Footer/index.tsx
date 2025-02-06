import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/Logo.svg"
import Pay from "../../assets/image 16.svg"

const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB] py-10">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between px-[20px]">
          <div className="flex flex-col items-start w-[204px]">
            <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-cactus text-white text-xl"></i>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">
              Garden Care
            </h3>
            <p className="text-sm text-start text-gray-600">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="flex flex-col items-start w-[204px]">
            <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-palette text-white text-xl"></i>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">
              Plant Renovation
            </h3>
            <p className="text-sm text-start text-gray-600">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="flex flex-col items-start w-[204px]">
            <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-cloud-rain text-white text-xl"></i>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">
              Watering Garden
            </h3>
            <p className="text-sm text-start text-gray-600">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="flex flex-col items-start w-[354px]">
            <h3 className="text-[18px] font-semibold text-start text-gray-900 mb-4">
              Would you like to join newsletters?
            </h3>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="p-2 border-2 border-gray-300 rounded-l-md w-[250px] focus:outline-none"
              />
              <button className="p-2 bg-green-600 text-white rounded-r-md">
                Join
              </button>
            </div>
            <p className="text-sm text-start text-gray-600 mt-4">
              We usually post offers and challenges in newsletters. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
            </p>
          </div>
        </div>

        <div className="bg-[#46A3581A] py-6 mt-10 flex items-center justify-between px-[20px] w-full">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="GreenShop Logo" className="h-10" />
          </div>
          <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-green-600 text-xl" />
          <p className="text-gray-700 text-sm">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex items-center space-x-3">
          <FaEnvelope className="text-green-600 text-xl" />
          <p className="text-gray-700 text-sm">contact@greenshop.com</p>
          </div>
          <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-green-600 text-xl" />
          <p className="text-gray-700 text-sm">+88 01911 717 490</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="grid grid-cols-4 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">My Account</h4>
              <ul className="space-y-2">
                <li>My Account</li>
                <li>Our Stores</li>
                <li>Contact Us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Help & Guide</h4>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Categories</h4>
              <ul className="space-y-2">
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="font-semibold text-gray-900 mb-3">Social Media</h4>
              <div className="flex gap-2 mb-4">
                <button className="w-8 h-8 bg-white border border-[#46A358] rounded flex items-center justify-center">
                <FaFacebookF className="text-[#46A358] opacity-60 text-xl cursor-pointer" />
                </button>
                <button className="w-8 h-8 bg-white border border-[#46A358] rounded flex items-center justify-center">
                <FaInstagram className="text-[#46A358] opacity-60 text-xl cursor-pointer" />
                </button>
                <button className="w-8 h-8 bg-white border border-[#46A358] rounded flex items-center justify-center">
                <FaTwitter className="text-[#46A358] opacity-60 text-xl cursor-pointer" />
                </button>
                <button className="w-8 h-8 bg-white border border-[#46A358] rounded flex items-center justify-center">
                <FaLinkedinIn className="text-[#46A358] opacity-60 text-xl cursor-pointer" />
                </button>
                <button className="w-8 h-8 bg-white border border-[#46A358] rounded flex items-center justify-center">
                <FaYoutube className="text-[#46A358] opacity-60 text-xl cursor-pointer" />
                </button>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">We accept</h4>
              <div className="flex gap-3">
                <img src={Pay} alt="" />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-6 border-t border-gray-200 pt-[20px]">
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
