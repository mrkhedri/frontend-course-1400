import React from "react";
import {Box, Button, Link, Typography} from '@mui/material'
import './style.scss'


export const PurchaseCart = ({srcMain, srcSec, title, price,}) => {
	return (
		<Link
			className={'purchase-cart'}
			sx={{
				mx: 2,
				backgroundImage: `url(${srcMain})`,
				textDecoration: 'none', '&:hover': {
					backgroundImage: `url(${srcSec})`,
					backgroundSize: 'cover',
					'& .button-sheet': {
						height: '150px',
					}, '& .purchase-button': {
						display: 'flex',
					},
				}
			}}>
			<Box sx={{pt: 5}} className={'button-sheet'}>
				<Typography>{title}</Typography>
				<Typography> <span>تومان</span> {price} </Typography>
				<Box className='purchase-button'>
					<Button>مشاهده و خرید</Button>
				</Box>
			</Box>
		</Link>

	)
}