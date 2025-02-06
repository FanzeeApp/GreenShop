import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import GreenButton from "../GreenButton";
import Gul from "../../assets/01 1.svg"
import Gul2 from "../../assets/data/image 1.svg"
import Gul3 from "../../assets/data/image 2.svg"

const HeroSection: React.FC = () => {
  return (
    <section className="container w-full bg-[linear-gradient(134.56deg,_rgba(245,245,245,0.5)_-23.457%,_rgba(245,245,245,0.5)_107.508%)] mt-[12px]">
      <div className="xl:mx-auto w-full">
      <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="swiper-div xl:flex flex-row justify-around items-center w-full">
              <div className="qism1 xl:flex flex-col gap-[7px]">
                <p className="xl:text-[rgb(61,61,61)] font-[Cera Pro] text-[14px] font-medium leading-[16px] tracking-[10%] text-left uppercase">
                  Welcome to GreenShop
                </p>
                <p className="xl:font-[Cera Pro] text-[70px] font-extrabold leading-[70px] tracking-[0%] text-left uppercase">
                  Let’s Make a <br />
                  Better <span className="text-green-600">Planet</span>
                </p>
                <p className="xl:text-[rgb(114,114,114)] font-[Cera Pro] text-[14px] font-normal leading-[24px] tracking-[0%] text-left pb-[37px]">
                  We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
                  our plants to create a unique Urban Jungle. Order your favorite plants!
                </p>
                <GreenButton title="SHOP NOW" width={140} height={40} />
              </div>
              <div className="qism2">
                <img src={Gul} alt="Plant Image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-div xl:flex flex-row justify-around items-center w-full">
              <div className="qism1 xl:flex flex-col gap-[7px]">
                <p className="xl:text-[rgb(61,61,61)] font-[Cera Pro] text-[14px] font-medium leading-[16px] tracking-[10%] text-left uppercase">
                  Welcome to GreenShop
                </p>
                <p className="xl:font-[Cera Pro] text-[70px] font-extrabold leading-[70px] tracking-[0%] text-left uppercase">
                  Let’s Make a <br />
                  Better <span className="text-green-600">Planet</span>
                </p>
                <p className="xl:text-[rgb(114,114,114)] font-[Cera Pro] text-[14px] font-normal leading-[24px] tracking-[0%] text-left pb-[37px]">
                  We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
                  our plants to create a unique Urban Jungle. Order your favorite plants!
                </p>
                <GreenButton title="SHOP NOW" width={140} height={40} />
              </div>
              <div className="qism2">
                <img src={Gul2} alt="Plant Image" className="w-[518px] h-[518px]"/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-div xl:flex flex-row justify-around items-center w-full">
              <div className="qism1 xl:flex flex-col gap-[7px]">
                <p className="xl:text-[rgb(61,61,61)] font-[Cera Pro] text-[14px] font-medium leading-[16px] tracking-[10%] text-left uppercase">
                  Welcome to GreenShop
                </p>
                <p className="xl:font-[Cera Pro] text-[70px] font-extrabold leading-[70px] tracking-[0%] text-left uppercase">
                  Let’s Make a <br />
                  Better <span className="text-green-600">Planet</span>
                </p>
                <p className="xl:text-[rgb(114,114,114)] font-[Cera Pro] text-[14px] font-normal leading-[24px] tracking-[0%] text-left pb-[37px]">
                  We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
                  our plants to create a unique Urban Jungle. Order your favorite plants!
                </p>
                <GreenButton title="SHOP NOW" width={140} height={40} />
              </div>
              <div className="qism2">
                <img src={Gul3} alt="Plant Image" className="w-[518px] h-[518px]"/>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
