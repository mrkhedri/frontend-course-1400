import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from 'components/Header'
import Footer from 'components/Footer'

function Layout(props) {
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default Layout;
