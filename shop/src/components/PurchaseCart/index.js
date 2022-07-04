import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Link, Typography } from '@mui/material'

import { toPersianNum, toPriceNum } from 'utils/numbers'

import './style.scss'

const PurchaseCart = ({ srcMain, srcSec, title, price, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/product/${slug}`);

	return (
    <div className="cart-wrapper">
      <Link
        className="purchase-cart"
        sx={{
          backgroundImage: `url(${srcMain})`,
          textDecoration: 'none', '&:hover': {
            backgroundImage: `url(${srcSec})`,
            backgroundSize: 'cover',
            '& .button-sheet': { height: '150px', marginTop: '-50px' },
            '& .purchase-button': { display: 'flex' },
          },
          borderRadius: '5px',
          boxShadow: '0 2px 10px rgb(31 45 61 / 16%)',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ pt: 5 }} className="button-sheet">
          <Typography>{title}</Typography>

          <Typography> <span>تومان</span> {toPriceNum(toPersianNum(price))}</Typography>

          <Box className='purchase-button'>
            <Button onClick={handleClick}>مشاهده و خرید</Button>
          </Box>
        </Box>
      </Link>
    </div>
	)
}

export default PurchaseCart;
