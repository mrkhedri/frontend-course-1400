import React from 'react'
import {Box, Container, Typography} from '@mui/material'
import {PurchaseCart} from "./index";

const Purchases = ({list}) => {
	return (
		<>
			<Container
				maxWidth={'lg'}
				sx={{
					display: 'flex ',
					flexDirection: 'column',
					alignItems: 'center ',
					justifyContent: 'center'
				}}
			>
				<Box mt={3} width={'10%'} borderBottom={'2px solid #e0b0e9'}/>
				<Typography sx={{py: 2}} variant={'h5'}>جدیدترین محصولات</Typography>
				<Box mb={3} width={'10%'} borderBottom={'1px solid #e0b0e9'}/>
			</Container>
			<Container sx={{px: '2%', mb: 5, display: 'flex', justifyContent: 'center'}} maxWidth={'lg'}>
				{list.map((item, index) =>
					(<PurchaseCart
						key={index}
						srcMain={item.srcMain}
						srcSec={item.srcSec}
						title={item.title}
						price={item.price}
					/>)
				)}
			</Container>
		</>
	)
}
export default Purchases