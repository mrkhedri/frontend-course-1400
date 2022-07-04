import React, {useRef, useState} from "react";
import Layout from 'components/Layout'
import Button from "@mui/material/Button";
import SocialNetworkIcon from "components/SocialNetworkIcon";
import GallerySlider from "components/GallerySlider/GallerySlider";
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {toPersianNum, toPriceNum} from "utils/numbers";
import G1 from 'assets/images/G1.jpg'
import G2 from 'assets/images/G2.jpg'

import 'Pages/Product/styleproduct.scss'

const item = [
    {srcMain: G1, srcSec: G2, title: 'دستبند و انگشتر ', price: 20000},
    {srcMain: G1, srcSec: G2, title: 'گردن آویز', price: 450},
    {srcMain: G1, srcSec: G2, title: 'دستبند', price: 5000000},
    {srcMain: G1, srcSec: G2, title: 'نیم ست', price: 3000},
    {srcMain: G1, srcSec: G2, title: 'دستبند و انگشتر ', price: 20000},
    {srcMain: G1, srcSec: G2, title: 'گردن آویز', price: 450},
    {srcMain: G1, srcSec: G2, title: 'دستبند', price: 5000000},
    {srcMain: G1, srcSec: G2, title: 'نیم ست', price: 3000},
]

function Product() {

    const urlstring = window.location.href
    let url = new URL(urlstring)
    let id = url.searchParams.get("id")

    const [num, setNum] = React.useState('')
    const handleChange = (event) => {
        setNum(event.target.value)
    }

    const zoomRef = useRef();
    const mainRef = useRef();

    const zoomInImg = () => {
        zoomRef.current.style.display = "flex";
        const divmain = mainRef.current.style;
        divmain.visibility = "hidden"
        divmain.height = "0"
    }
    const zoomOutImg = () => {
        zoomRef.current.style.display = "none";
        mainRef.current.style.visibility = "visible";
    }

    return (
        <div>
            <div ref={mainRef}>
                <Layout>
                    <Container maxWidth="lg" className="parent">
                        <div>
                            <img className="pro-img" src={item[id].srcMain} alt="product-image" onClick={zoomInImg}/>
                        </div>
                        <div className="details">
                            <div className="path">
                                <span className="line">کالای فیزیکی </span>
                                <span className="line">صفحه اصلی</span>
                                <span className="line">/</span>
                                <span className="line">{item[id].title}</span>
                            </div>

                            <div className="title">{item[id].title}</div>

                            <div className="price">
                                <div className="number">{toPriceNum(toPersianNum(item[id].price))}</div>
                                <span> تومان</span>
                            </div>

                            <div>
                                {item[id].title.includes("انگشتر") ?
                                    <div className="size">
                                        <span className="textsize">انتخاب سایز</span>

                                        <FormControl sx={{minWidth: 120, maxWidth: 280}}>
                                            <Select
                                                dir="ltr"
                                                value={num}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{'aria-label': 'Without label'}}
                                            >
                                                <MenuItem value="">
                                                    <em>{toPersianNum(7)}</em>
                                                </MenuItem>
                                                <MenuItem value={20}>{toPersianNum(8)}</MenuItem>
                                                <MenuItem value={30}>{toPersianNum(9)}</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    : null}
                            </div>

                            <div className="button">
                                <Button variant="contained" style={{
                                    backgroundColor: "#3ECF8E"
                                }}>اضافه به سبد خرید</Button>
                                <div className="left">
                                    <SocialNetworkIcon link="https://www.facebook.com/" color="default">
                                        <FacebookIcon/>
                                    </SocialNetworkIcon>
                                    <SocialNetworkIcon link="https://twitter.com/" color="default">
                                        <TwitterIcon/>
                                    </SocialNetworkIcon>
                                    <SocialNetworkIcon link="https://telegram.me/" color="default">
                                        <TelegramIcon/>
                                    </SocialNetworkIcon>
                                    <SocialNetworkIcon link="https://web.whatsapp.com/" color="default">
                                        <WhatsAppIcon/>
                                    </SocialNetworkIcon>
                                    {/*<i className="fa fa-whatsapp" aria-hidden="true" />*/}
                                </div>
                            </div>
                        </div>

                    </Container>
                    <GallerySlider list={item} title="محصولات مرتبط"/>
                </Layout>
            </div>
            <div ref={zoomRef} className="zoom" onClick={zoomOutImg}>
                <img className="zoomImg" src={item[id].srcMain} alt="product-image"/>
            </div>
        </div>
    )
}

export default Product;
