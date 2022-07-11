import React, {useEffect, useState} from "react";
import axios from 'axios'

import Layout from 'components/Layout'
import Slider from 'components/Slider'
import Ads from 'components/Ads'
import PurchaseList from "components/PurchaseList";
import ProductSlider from "components/ProductSlider";
import Faq from "components/Faq";
import ad1 from 'assets/images/ad1.jpg'
import ad2 from 'assets/images/ad2.jpg'
import ad3 from 'assets/images/ad3.jpg'
import ad4 from 'assets/images/ad4.jpg'
import ad5 from 'assets/images/ad5.jpg'
import ad6 from 'assets/images/ad6.jpg'
import ad7 from 'assets/images/ad7.jpg'
import ad8 from 'assets/images/ad8.jpg'
import ad9 from 'assets/images/ad9.jpg'
import ad10 from 'assets/images/ad10.jpg'
import ad11 from 'assets/images/ad11.jpg'
import ad12 from 'assets/images/ad12.png'
import G1 from 'assets/images/G1.jpg'
import G2 from 'assets/images/G2.jpg'
// import About from "../About";

const list1 = [
  {src: ad1, alt: 'ad1'}
]

const list2 = [
  {src: ad2, alt: 'ad2'},
  {src: ad3, alt: 'ad3'},
  {src: ad4, alt: 'ad4'},
  {src: ad5, alt: 'ad5'},
  {src: ad6, alt: 'ad6'},
  {src: ad7, alt: 'ad7'},
  {src: ad8, alt: 'ad8'},
  {src: ad9, alt: 'ad9'},
]

const list3 = [
  {src: ad10, alt: 'ad10'}
]

const list4 = [
  {src: ad11, alt: 'ad11'}
]

const list5 = [
  {src: ad12, alt: 'ad12'}
]

// export const purchaseItems = [
//   {id: "1", slug: 'bracelets-and-rings', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'دستبند انگشتر ', price: 20000, defaultSize: 20},
//   {id: "2", slug: 'rings', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'انگشتر', price: 450, defaultSize: 10},
//   {id: "3", slug: 'bracelets', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'دستبند', price: 5000000},
//   {id: "4", slug: 'product-test-1', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'نیم ست', price: 3000},
//   {id: "5", slug: 'product-test-2', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'دستبند و انگشتر ', price: 20000, defaultSize: 20},
//   {id: "6", slug: 'product-test-3', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'گردن آویز', price: 450},
//   {id: "7", slug: 'product-test-4', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'دستبند', price: 5000000},
//   {id: "8", slug: 'product-test-5', srcMain: 'https://sarmeydesign.com/uploads/image/rootimage/3224/c81e728d9d4c2f636f067f89cc14862c.jpg?w=800&h=800', srcSec: 'https://sarmeydesign.com/uploads/image/rootimage/1776/9fdd00e5a7644e2a9cab14048d2e1583.jpg?w=800&h=800', title: 'نیم ست', price: 3000}
// ]

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/product')
      .then(res => setProducts(res.data))
      .catch(error => console.log('error -> ', error));
  }, [])

  return (
    <Layout>
      <Slider/>

      <Ads list={list1} columns={1}/>

      <Ads list={list2} columns={4}/>

      <Ads list={list3} columns={1}/>

      <PurchaseList list={products}/>

      <ProductSlider list={products} title='جدیدترین محصولات'/>

      <Ads list={list5} columns={1}/>

      <Ads list={list4} columns={1} title="راهنمای سایز" hasAnimation/>

      <Faq/>
    </Layout>
  )
}

export default Home;
