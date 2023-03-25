import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import ImageSliderStyle from "./ImageSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ImageSlider({ images }) {
  return (
    <div className={ImageSliderStyle.slider}>
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
        className={ImageSliderStyle.swiper}
        style={{
          "--swiper-pagination-color": "#59585B",
          "--swiper-navigation-color": "#59585B",
        }}
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
