import Navbar from "../../components/Navbar";
import { Product } from "../../interfaces";
import { useEffect, useState } from "react";
import Banner from "../../assets/Super Sale Banner.svg";
import HeroSection from "../../components/Swiper";
import axios from "axios";
import Card from "../../components/Card";
import image14 from "../../assets/image 14.svg";
import image15 from "../../assets/image 15.svg";
import MiniCard from "../../components/MiniCard";
import img1 from "../../assets/minicard/01.svg";
import img2 from "../../assets/minicard/02.svg";
import img3 from "../../assets/minicard/03.svg";
import img4 from "../../assets/minicard/04.svg";
import Footer from "../../components/Footer";
import GreenButton from "../../components/GreenButton";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(4000);
  const [category, setCategory] = useState("");
  const [page] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchApi() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.e-commerce-api-v3.nt.azimumarov.uz/api/v1/products`, 
        {
          params: {
            page,
            limit: 9,
            "price-from": 0,
            "price-to": price,
            category: category === "Hammasi" ? "" : category,
            size: size === "Hammasi" ? "" : size,
          },
        }
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("API dan ma'lumot olishda xatolik:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [category, size, price, page]);

  return (
    <div>
      <div>
        <div className="Nav xl:container mx-auto w-full">
          <Navbar />
        </div>
        <HeroSection />
        <section className="container flex items-start justify-between">
          <div className="qism-one">
            <div className="w-[350px] mt-5 p-4 bg-[#FBFBFB]">
              <div className="mb-6 flex flex-col items-start gap-[10px]">
                <h2 className="text-lg font-semibold mb-3">Categories</h2>
                <ul className="space-y-2 text-gray-700 pl-5 flex flex-col gap-1 w-[310px]">
                  {["House Plants", "Potter Plants", "Seeds", "Small Plants", "Big Plants", "Succulents", "Terrariums", "Gardening", "Hammasi"].map((name) => (
                    <li
                      key={name}
                      onClick={() => setCategory(name)}
                      className={`flex justify-between cursor-pointer ${category === name ? "text-green-600 font-bold" : "hover:text-green-600"}`}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 flex items-start flex-col gap-[10px]">
                <h2 className="font-semibold mb-3">Price Range</h2>
                <input
                  type="range"
                  min="10"
                  max="4000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-[300px] ml-5 cursor-pointer"
                />
                <p className="ml-5 text-gray-700 mt-2">
                  Price: <span className="text-green-600 font-semibold">$39 – ${price}</span>
                </p>
                <div className="ml-5">
                  <GreenButton title="Filter" width={90} height={35} />
                </div>
              </div>

              <div className="flex flex-col items-start w-[310px]">
                <h2 className="text-lg font-semibold mb-3">Size</h2>
                <ul className="space-y-2 text-gray-700 w-[310px] ml-5 pr-5">
                  {["Small", "Medium", "Large", "Hammasi"].map((label) => (
                    <li
                      key={label}
                      onClick={() => setSize(label)}
                      className={`flex justify-between cursor-pointer ${size === label ? "text-green-600 font-bold" : "hover:text-green-600"}`}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
              <img src={Banner} className="w-[400px] h-auto mt-[20px]" />
            </div>
          </div>

          <div className="qism-two">
            {loading ? (
              <p className="text-center text-green-600 font-semibold">Yuklanmoqda...</p>
            ) : (
              <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:pb-[60px]">
                {products.length > 0 ? (
                  products.map((item) => (
                    <Card key={item._id} _id={item._id} name={item.name} imgUrl={item.pictures} price={item.price} />
                  ))
                ) : (
                  <p className="text-center text-gray-600">Mahsulot topilmadi</p>
                )}
              </div>
            )}
          </div>
        </section>
        <section className="container flex items-center justify-between pt-28">
                  <div className="1-product bg-[#FBFBFB]">
                      <div className="w-[586px] h-[250px] flex items-center p-4">
                          <div className="w-1/2 flex justify-center items-center">
                              <img src={image14} alt="Plant" className="w-full h-auto object-contain" />
                          </div>
                          <div className="w-1/2 flex flex-col justify-center items-end px-4">
                              <h3 className="text-[18px] font-bold text-[#333] uppercase">
                                  SUMMER CACTUS <br /> & SUCCULENTS
                              </h3>
                              <p className="text-[14px] text-gray-600 mt-2 leading-[20px]">
                                  We are an online plant shop offering a wide range of cheap and trendy plants
                              </p>
                              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                  Find More →
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className="2-product bg-[#FBFBFB]">
                      <div className="w-[586px] h-[250px] flex items-center p-4">
                          <div className="w-1/2 flex justify-center items-center">
                              <img src={image15} alt="Plant" className="w-full h-auto object-contain" />
                          </div>
                          <div className="w-1/2 flex flex-col justify-center items-end px-4">
                              <h3 className="text-[18px] font-bold text-[#333] uppercase">
                                  SUMMER CACTUS <br /> & SUCCULENTS
                              </h3>
                              <p className="text-[14px] text-gray-600 mt-2 leading-[20px]">
                                  We are an online plant shop offering a wide range of cheap and trendy plants
                              </p>
                              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                  Find More →
                              </button>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="flex flex-col items-center container pt-[138px]">
                  <div className="flex flex-col items-center gap-5">
                      <p className="font-[Cera Pro] text-[30px] font-bold leading-[16px] text-center underline decoration-transparent">Our Blog Posts</p>
                      <p className="font-[Cera Pro] text-[14px] font-normal leading-[24px] text-center underline decoration-transparent opacity-70">
                          We are an online plant shop offering a wide range of cheap and trendy plants.
                      </p>
                  </div>
                  <div className="flex flex-row justify-between container p-[35px]">
                      <MiniCard image={img1} sana="September 12" minute={6} name="Cactus & Succulent" desc="Cacti are succulents are easy care plants for any home or patio." />
                      <MiniCard image={img2} sana="September 13" minute={2} name="Cactus & Succulent" desc="Cacti are succulents are easy care plants for any home or patio." />
                      <MiniCard image={img3} sana="September 15" minute={3} name="Cactus & Succulent" desc="Cacti are succulents are easy care plants for any home or patio." />
                      <MiniCard image={img4} sana="September 15" minute={2} name="Cactus & Succulent" desc="Cacti are succulents are easy care plants for any home or patio." />
                  </div>
              </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
