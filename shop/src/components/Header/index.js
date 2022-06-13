import React from "react";
import Container from '@mui/material/Container';
import './style.scss'
import Gallery from "../../assets/images/galley.jpg";
import Search from "../../assets/images/search.svg";


function Header() {
    return (

        <div className='Header'>

            <div className='headerbox'>
                <Container maxWidth="lg" className="whitebox">
                    <div>
                        <a href="/">
                            <img className="img" src={Gallery} alt=""/>
                        </a>
                    </div>
                    <div className="list">
                        <ul className="menu">
                            <li><a  href=""> شال و روسری </a></li>
                            <li><a href=""> شال و روسری </a></li>
                            <li><a href=""> شال و روسری </a></li>
                        </ul>

                    </div>

                    <div className="xx">

                            <img className="icon1" src={Search} alt=""/>
                        <img className="icon1" src={Search} alt=""/>

                        <div >
                            <span className="sign">عضویت </span>
                            <span> | </span>
                            <span className="sign">وارد شوید</span>
                        </div>

                    </div>


                </Container>


            </div>

<div className="hide">
                <Container maxWidth="lg" className="submenu1" >
                <div className="hsubmenu">
                    <ul>
                        <ol> انگشتر </ol>
                        <ol> دستبند </ol>
                        <ol> پابند </ol>
                        <ol> گردنبند </ol>
                        <ol> نیم ست </ol>

                    </ul>
                </div>

                <div className="hsubmenu">
                    <ul>
                        <ol> گوشواره </ol>
                        <ol> ایرکاف </ol>

                    </ul>
                </div>
                <div className="hsubmenu">
                    <ul>
                        <ol> پیرسینگ </ol>
                        <ol> دستبند </ol>
                        <ol> پابند </ol>
                        <ol> گردنبند </ol>


                    </ul>
                </div>

               </Container>
</div>

        </div>
    )
}

export default Header;
