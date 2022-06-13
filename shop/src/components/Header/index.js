import React from "react";
import Container from '@mui/material/Container';

import HeaderShape from 'components/Svg/HeaderShape'
import Gallery from "assets/images/galley.jpg";
import Search from "assets/images/search.svg";

import './style.scss'

function Header() {
  return (

    <div className='Header'>
      <div className='headerbox'>
        <HeaderShape className="header-shape" />

        <Container maxWidth="lg" className="whitebox">
          <div>
            <a href="#">
              <img className="img" src={Gallery} alt=""/>
            </a>
          </div>
          <div className="list">
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
          <div className="xx">

            <img className="icon1" src={Search} alt=""/>
            <img className="icon1" src={Search} alt=""/>

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
