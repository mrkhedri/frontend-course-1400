import React from "react";
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';

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
          <Link href="https://www.instagram.com/sarmey.gallery/" target="_blank">
            <IconButton color="secondary">
              <InstagramIcon />
            </IconButton>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
