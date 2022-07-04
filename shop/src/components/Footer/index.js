import React from "react";
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import SocialNetworkIcon from "components/SocialNetworkIcon";

import './style.scss'

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="lg" className="content">
        <div className="right">
          <span>© ۱۴۰۱ - کلیه حقوق این فروشگاه برای «سارمی» محفوظ است</span>
          <span className="separator">|</span>
          <span>فروشگاه ساخته شده با <a className="link" href="#">سازیتو</a></span>
        </div>

        <div className="left">
          <SocialNetworkIcon link="https://www.instagram.com/sarmey.gallery/" color="secondary">
            <InstagramIcon />
          </SocialNetworkIcon>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
