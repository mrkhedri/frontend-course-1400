import React, {useState} from 'react';
import SwiperCore, {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Container from '@mui/material/Container';
import PurchaseCart from "../PurchaseCart";
import 'components/GallerySlider/gstyle.scss'
import Title from "components/title/Title";
import Product from "../../Pages/Product";
import ReactDOM from "react-dom/client";
// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

function GallerySlider({list, title}) {
    const [setSwiperRef] = useState(null);

    const ShowDetail = (id) => {
        window.open("product?id=" + id);
        // const domContainer = document.getElementById('main');
        // const root = ReactDOM.createRoot(domContainer);
        // root.render(
        //     <Product item={list[id]}/>
        // )
    }
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
                            <SwiperSlide key={item} virtualIndex={index} onClick={() => ShowDetail(index)}>
                                <PurchaseCart
                                    key={index}
                                    srcMain={item.srcMain}
                                    srcSec={item.srcSec}
                                    title={item.title}
                                    price={item.price}
                                />

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </Container>
        </div>
    );
}

export default GallerySlider