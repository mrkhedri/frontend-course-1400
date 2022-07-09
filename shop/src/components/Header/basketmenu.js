import React from "react";
import Container from '@mui/material/Container';

import Card from "components/Card";
import UserContext from "context/UserContext";

import './stylebasketmenu.scss'
import {toPersianNum} from "../../utils/numbers";

function BasketMenu() {
  const {ids, setIds} = React.useContext(UserContext);

  const openNav = () => {
    document.getElementById("myNav").style.transform = "translateX(0)";
  }

  const closeNav = e => {
    e.preventDefault();
    document.getElementById("myNav").style.transform = "translateX(-100%)";
  }

  return (
    <div className='open-menu'>
      <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        <Container className="overlay-content">
          <div className='steps'>
            <div className='step'>
              <i className="fa fa-shopping-bag micon" aria-hidden="true"></i>
              <div>بررسی سبد خرید</div>
            </div>
            <div className='line'></div>
            <div className='step'>
              <i className="fa fa-truck micon" aria-hidden="true"></i>
              <div>اطلاعات ارسال</div>
            </div>
            <div className='line'></div>
            <div className='step'>
              <i className="fa fa-money micon" aria-hidden="true"></i>
              <div>نحوه پرداخت</div>
            </div>
            <div className='line'></div>
            <div className='step'>
              <i className="fa fa-check micon" aria-hidden="true"></i>
              <div>پایان خرید</div>
            </div>
          </div>
          {/*<div className='box-msg'>محصولی در سبد خرید وجود ندارد</div>*/}
          <Card/>
          <div className='price'>
            <div className='sub-price'>
              <div className='price-title'>مبلغ کل سبد خرید:</div>
              <div className='price-value'>0 تومان</div>
            </div>
          </div>
          <div className='payment'>
            <div className='sabt'>ثبت سفارش</div>
            <i className="fa fa-arrow-left arrow-icon"></i>
          </div>
        </Container>
      </div>
      <div className="basketIcon">
        {ids.length!==0 ? <div className="badge">
          {toPersianNum(ids.length)}
        </div> : <div className="emp-badge"></div> }

        <i className="fa fa-shopping-cart icon open" aria-hidden="true" onClick={openNav}/>
      </div>
    </div>
  )
}

export default BasketMenu;
