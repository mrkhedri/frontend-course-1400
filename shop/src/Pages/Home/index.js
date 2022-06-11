import React from "react";
import { Link } from "react-router-dom";

import Layout from 'components/Layout'
import Slider from 'components/Slider'

function Home() {
  return (
    <Layout>
      <Slider />

      <div>Home</div>
      <Link to="about">Go to About</Link>
    </Layout>
  )
}

export default Home;
