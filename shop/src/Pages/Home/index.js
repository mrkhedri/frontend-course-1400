import React from "react";
import { Link } from "react-router-dom";

import Layout from 'components/Layout'
import Slider from 'components/Slider'
import Ads from 'components/Ads'
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

const list1 = [
  { src: ad1, alt: 'ad1' }
]

const list2 = [
  { src: ad2, alt: 'ad2' },
  { src: ad3, alt: 'ad3' },
  { src: ad4, alt: 'ad4' },
  { src: ad5, alt: 'ad5' },
  { src: ad6, alt: 'ad6' },
  { src: ad7, alt: 'ad7' },
  { src: ad8, alt: 'ad8' },
  { src: ad9, alt: 'ad9' },
]

const list3 = [
  { src: ad10, alt: 'ad10' }
]

function Home() {
  return (
    <Layout>
      <Slider />

      <Ads list={list1} columns={1} />

      <Ads list={list2} columns={4} />

      <Ads list={list3} columns={1} />

      <div style={{ height: 800 }}>Home</div>
      <Link to="about">Go to About</Link>
    </Layout>
  )
}

export default Home;
