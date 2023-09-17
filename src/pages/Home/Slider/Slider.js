import styles from "./Slider.module.scss";
import classNames from "classnames/bind";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//data
import Data from "~/ImageSlider.json";
const cx = classNames.bind(styles);
function Slider() {
  return (
    <div className={cx("wrapper")}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
     
        {Data.map((result, index) => (
          <SwiperSlide key={index}>
            <img src={result.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Slider;
