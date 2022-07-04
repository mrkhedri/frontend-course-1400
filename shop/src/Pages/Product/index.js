import React, { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Layout from 'components/Layout'
import SocialNetworkIcon from "components/SocialNetworkIcon";
import ProductSlider from "components/ProductSlider";
import { toPersianNum, toPriceNum } from "utils/numbers";
import { purchaseItems as list } from 'Pages/Home'

import './style.scss'

function Product() {
  const { slug } = useParams();
  const [num, setNum] = useState(null);
  const zoomRef = useRef();
  const mainRef = useRef();

  const item = list.find(p => p.slug === slug)

  useEffect(() => {
    setNum(item.defaultSize)
  }, [slug]);

  const handleChange = event => setNum(event.target.value)

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

  const handleAddToBasket = () => {
    console.log('num -> ', num)
  }

  return (
    <div>
      <div ref={mainRef}>
        <Layout>
          <Container maxWidth="lg" className="parent">
            <div>
              <img className="pro-img" src={item.srcMain} alt="product-image" onClick={zoomInImg}/>
            </div>

            <div className="details">
              <div className="path">
                <span className="line">کالای فیزیکی </span>
                <span className="line">صفحه اصلی</span>
                <span className="line">/</span>
                <span className="line">{item.title}</span>
              </div>

              <div className="title">{item.title}</div>

              <div className="price">
                <div className="number">{toPriceNum(toPersianNum(item.price))}</div>
                <span> تومان</span>
              </div>

              <div>
                {item.title.includes("انگشتر") ?
                  <div className="size">
                    <span className="textsize">انتخاب سایز</span>

                    <FormControl sx={{minWidth: 120, maxWidth: 280}}>
                      <Select
                        dir="ltr"
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{'aria-label': 'Without label'}}
                        defaultValue={item.defaultSize}
                      >
                        <MenuItem value={10}>{toPersianNum(10)}</MenuItem>
                        <MenuItem value={20}>{toPersianNum(20)}</MenuItem>
                        <MenuItem value={30}>{toPersianNum(30)}</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  : null}
              </div>

              <div className="button">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#3ECF8E"
                  }}
                  onClick={handleAddToBasket}
                >
                  اضافه به سبد خرید
                </Button>

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

          <ProductSlider list={list} title="محصولات مرتبط"/>
        </Layout>
      </div>

      <div ref={zoomRef} className="zoom" onClick={zoomOutImg}>
        <img className="zoomImg" src={item.srcMain} alt="product-image"/>
      </div>
    </div>
  )
}

export default Product;
