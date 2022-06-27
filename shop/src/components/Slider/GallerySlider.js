import React, {useRef, useState} from 'react';
import SwiperCore, {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Container from '@mui/material/Container';
import PurchaseCart from "../PurchaseCart";
import './gstyle.scss'
import {Box, Typography} from "@mui/material";
// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

function GallerySlider({list}) {
    const [setSwiperRef] = useState(null);

    return (
        <div>
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center ',
                justifyContent: 'center'
            }}
        >
            <Box mt={3} width={'10%'} borderBottom={'2px solid #e0b0e9'}/>

            <Typography sx={{py: 2}} variant={'h5'}>جدیدترین محصولات</Typography>

            <Box mb={3} width={'10%'} borderBottom={'1px solid #e0b0e9'}/>
        </Container>
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
                        <SwiperSlide key={item} virtualIndex={index}>
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