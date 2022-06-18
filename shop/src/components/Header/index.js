import React from "react";
import Container from '@mui/material/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import HeaderShape from 'components/Svg/HeaderShape'
import Gallery from "assets/images/galley.jpg";
import Search from "assets/images/search.svg";

import './style.scss'

function Header() {
  return (

    <div className="">
      <div className='headerbox'>
        <HeaderShape className="header-shape" />

        <Container maxWidth="lg" className="header">
          <div className="logo">
            <a href="#">
              <img className="img" src={Gallery} alt=""/>
            </a>
          </div>


          <div className="main-menu">
            <ul className="menu">
              <li>
                <a href="#"> شال و روسری </a>
                <div className="submenu-container">
                  <div className="submenu-inner">
                    <div className="hsubmenu">
                      <ul>
                        <ol> انگشتر</ol>
                        <ol> دستبند</ol>
                        <ol> پابند</ol>
                        <ol> گردنبند</ol>
                        <ol> نیم ست</ol>

                      </ul>
                    </div>
                    <div className="hsubmenu">
                      <ul>
                        <ol> گوشواره</ol>
                        <ol> ایرکاف</ol>

                      </ul>
                    </div>
                    <div className="hsubmenu">
                      <ul>
                        <ol> پیرسینگ</ol>
                        <ol> دستبند</ol>
                        <ol> پابند</ol>
                        <ol> گردنبند</ol>


                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#"> دوم </a>
              </li>
              <li>
                <a href="#"> سوم </a>
              </li>
            </ul>
          </div>


          <div className="icons">

            {/*<img className="icon1" src={Search} alt=""/>*/}
            <i className="fa fa-shopping-cart" aria-hidden="true" />

            <div>
              <span className="sign">عضویت </span>
              <span> | </span>
              <span className="sign">وارد شوید</span>
            </div>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header;
