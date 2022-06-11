import React from "react";
import {Link} from "react-router-dom";

import Layout from '../../components/Layout'

function About() {
  return (
    <Layout>
      <div>About</div>
      <Link to="/">Go to Home</Link>
    </Layout>
  )
}

export default About;
