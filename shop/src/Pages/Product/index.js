import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import UserContext from "context/UserContext";
import Layout from 'components/Layout'
import SocialNetworkIcon from "components/SocialNetworkIcon";
import ProductSlider from "components/ProductSlider";
import ShowImg from "components/ShowImg";
import {toPersianNum, toPriceNum} from "utils/numbers";

import './style.scss'

function Product() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [num, setNum] = useState(null);
  const { basketList, setBasketList } = useContext(UserContext);

  useEffect(() => {
    axios.get('/product')
      .then(res => setProducts(res.data))
      .catch(error => console.log('error -> ', error));
  }, [])

  useEffect(() => {
    axios.get(`/product/${id}`)
      .then(res => setItem(res.data))
      .catch(error => console.log('error -> ', error));
  }, [id])

  useEffect(() => {
    if (item) {
      setNum(item.defaultSize)
    }
  }, [id]);

  const handleChange = event => setNum(event.target.value)

  const handleAddToBasket = () => {
    if (basketList.some(p => p.id === item.id)) {
      const updateArray = basketList.map(p => {
        if (p.id === item.id) {
          return { ...p, count: p.count + 1 }
        }
        return p
      })

      setBasketList(updateArray)
    } else {
      const updateArray = [...basketList];

      updateArray.push({ ...item, count: 1 })
      setBasketList(updateArray)
    }
  }

  if (!item) {
    return null
  }

  return (
    <Layout>
      <Container maxWidth="lg" className="parent">

        <ShowImg src={item.srcMain}/>

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

      <ProductSlider list={products} title="محصولات مرتبط"/>
    </Layout>
  )
}

export default Product;
