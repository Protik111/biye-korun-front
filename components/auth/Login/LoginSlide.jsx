// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const LoginSlider = () => {
  const imageData = [
    "auth/3.png",
    "auth/1.png",
    "auth/2.png",
    "auth/4.png",
    "auth/5.png",
    "auth/6.png",
    // Add more image URLs as needed
  ];

  function imgUrl(index) {
    return imageData[index % imageData.length];
  }

  function createSlide(index) {
    return (
      <SwiperSlide key={index}>
        <img className="img" src={imgUrl(index)} alt="" />
      </SwiperSlide>
    );
  }

  return (
    <div className="loginComp__wrapper--right flex flex-column flex-gap-10 justify-center align-center ">
      <Link href={"/"}>
        <div className="right_content_img">
          <img src="/logoNew.svg" alt="" />
        </div>
      </Link>
      <h1 style={{ color: "white" }} className="hide_mobile mb-25">
        Welcome Back!
      </h1>
      {/* <div class="image-slider">
            <div class="slider-content">
              <div class="slide">
                <img src="auth/1.png" alt="Slide 1" />
              </div>
              <div class="slide">
                <img src="auth/2.png" alt="Slide 2" />
              </div>
              <div class="slide">
                <img src="auth/3.png" alt="Slide 3" />
              </div>
              <div class="slide">
                <img src="auth/4.png" alt="Slide 3" />
              </div>
              <div class="slide">
                <img src="auth/5.png" alt="Slide 3" />
              </div>
              <div class="slide">
                <img src="auth/6.png" alt="Slide 3" />
              </div>
            </div>
          </div> */}
      <>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          onMouseDown={[EffectCreative]}
          className="login-carousel"
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {imageData.map((_, index) => createSlide(index))}
        </Swiper>
      </>
    </div>
  );
};

export default LoginSlider;
