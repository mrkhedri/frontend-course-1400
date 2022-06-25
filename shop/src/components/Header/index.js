import React from "react";
import Container from '@mui/material/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import HeaderShape from 'components/Svg/HeaderShape'
import Gallery from "assets/images/galley.jpg";
import BasketMenu from "./basketmenu";
import Search from "assets/images/search.svg";

import './style.scss'



function Header() {

  const onClickShowSearch = () => {
    document.getElementById("search").style.display = 'flex'
    const input = document.getElementById("input-search");
    input.focus();
    // document.getElementById("sub-actions").style.display = 'none'
  }

  const onClickHideSearch = () => {
    // document.getElementById("sub-actions").style.display = 'flex'
    document.getElementById("search").style.display = 'none'
    document.getElementById("input-search").value = ''
    const btn = document.getElementById('btn-search');
    btn.style.backgroundColor='#e8e8e8'
    btn.style.color='#B9B9B9'
    btn.style.cursor='not-allowed'
  }

  const onChangeSearch = () => {
   const btn = document.getElementById('btn-search');
   btn.style.backgroundColor='#e0b0e9'
    btn.style.color='#ffffff'
    btn.style.cursor='pointer'
  }

  return (

    <div className="main-header">
      <div className='headerbox'>
        <HeaderShape className="header-shape" />

        <Container maxWidth="lg" className="header">
          <div className="right">
            <div className="logo">
              <a href="#">
                <img className="img" src={Gallery} alt=""/>
              </a>
            </div>

            <div className="main-menu">
              <ul className="menu">
                <li>
                  <a href="#"> اکسسوری </a>
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
                  <a href="#"> شال و روسری </a>
                  <div className="submenu-container">
                    <div className="submenu-inner">
                      <div className="hsubmenu">
                        <ul>
                          <ol> شال</ol>
                          <ol>روسری</ol>
                        </ul>
                      </div>


                    </div>
                  </div>
                </li>
                <li>
                  <a href="#"> گل سینه </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="actions">
            <div className="sub-action" id="sub-actions">


              {/*<img className="icon1" src={Search} alt=""/>*/}
              <div className="icons">
                <i className="fa fa-search icon" aria-hidden="true" onClick={onClickShowSearch}/>
                <BasketMenu/>
              </div>

              <div>
                <span className="sign">عضویت  </span>
                <span>  |  </span>
                <span className="sign">وارد شوید </span>
              </div>

            </div>
            <div className="search" id="search">
              <i className="fa fa-close icon" aria-hidden="true" onClick={onClickHideSearch}></i>
              <input id='input-search' className="input-search" type="text" placeholder="نام محصول یا دسته" onChange={onChangeSearch}/>
              <div  id='btn-search' className="input-btn">جستجو</div>
            </div>
          </div>

        </Container>

      </div>
    </div>
  )
}

export default Header;
