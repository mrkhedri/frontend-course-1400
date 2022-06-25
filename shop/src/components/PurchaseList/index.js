import React from 'react'
import {Box, Container, Typography} from '@mui/material'

import PurchaseCart from 'components/PurchaseCart';

import './style.scss';

const PurchaseList = ({list}) => {
	return (
		<div className="purchase-list">
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center ',
          justifyContent: 'center'
        }}
      >
        <Box mt={3} width={'10%'} borderBottom={'2px solid #e0b0e9'}/>

        <Typography sx={{py: 2}} variant={'h5'}>جدیدترین محصولات</Typography>

        <Box mb={3} width={'10%'} borderBottom={'1px solid #e0b0e9'}/>
      </Container>

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