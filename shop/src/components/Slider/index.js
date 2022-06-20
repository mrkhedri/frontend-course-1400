import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Container from "@mui/material/Container";

import slide1 from 'assets/images/slide1.jpg'

import './style.scss'

function Slider() {
  return (
    <div className="main-slider">
      <Container maxWidth="lg">
        <div className="inner">
          <Swiper
            pagination
            navigation
            modules={[Pagination, Navigation]}
            dir="rtl"
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="img" src={slide1} alt="slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img" src={slide1} alt="slide2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img" src={slide1} alt="slide3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Slider;
