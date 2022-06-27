import React from "react";
import {Link} from "react-router-dom";

import Layout from 'components/Layout'
import Slider from 'components/Slider'
import Ads from 'components/Ads'
import PurchaseList from "components/PurchaseList";
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
import GallerySlider from "components/Slider/GallerySlider";
import Faq from "components/Faq";

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

const purchaseItems = [
  {srcMain: G1, srcSec: G2, title: 'دستبند و انگشتر ', price: 20000},
  {srcMain: G1, srcSec: G2, title: 'گردن آویز', price: 450},
  {srcMain: G1, srcSec: G2, title: 'دستبند', price: 5000000},
  {srcMain: G1, srcSec: G2, title: 'نیم ست', price: 3000},
  {srcMain: G1, srcSec: G2, title: 'دستبند و انگشتر ', price: 20000},
  {srcMain: G1, srcSec: G2, title: 'گردن آویز', price: 450},
  {srcMain: G1, srcSec: G2, title: 'دستبند', price: 5000000},
  {srcMain: G1, srcSec: G2, title: 'نیم ست', price: 3000},
]

function Home() {
	return (
		<Layout>
			<Slider/>

			<Ads list={list1} columns={1} />

			<Ads list={list2} columns={4} />

			<Ads list={list3} columns={1} />

			<PurchaseList list={purchaseItems}/>

			<GallerySlider list={purchaseItems}/>

      <Ads list={list5} columns={1} />

      <Ads list={list4} columns={1} title="راهنمای سایز" hasAnimation />

      <Faq />
		</Layout>
	)
}

export default Home;
