import React from 'react'
import {Box, Container, Typography} from '@mui/material'
import Title from "components/title/Title";

import PurchaseCart from 'components/PurchaseCart';

import './style.scss';

const PurchaseList = ({list}) => {
	return (
		<div className="purchase-list">
      <Title topic="جدیدترین محصولات"/>

      <Container sx={{ mb: 5, display: 'flex', justifyContent: 'center' }} maxWidth="lg">
        <div className="inner">
          {list.map((item, index) => (
            <PurchaseCart
              key={index}
              srcMain={item.srcMain}
              srcSec={item.srcSec}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </Container>
		</div>
	)
}
export default PurchaseList