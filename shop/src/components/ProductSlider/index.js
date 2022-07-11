import React, {useState} from 'react';
import SwiperCore, {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Container from '@mui/material/Container';
import ReactDOM from "react-dom/client";

import PurchaseCart from "components/PurchaseCart";
import Title from "components/title/Title";

import './style.scss'

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

function Index({ list, title }) {
  const [setSwiperRef] = useState(null);

  return (
    <div className="gallery-slider">
      <Title topic={title}/>
      <Container maxWidth="lg">
        <div className="inner">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={0}
            navigation={true}
            virtual
          >
            {list.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <PurchaseCart
                  key={index}
                  id={item.id}
                  srcMain={item.srcMain}
                  srcSec={item.srcSec}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Index