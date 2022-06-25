import {createTheme} from '@mui/material/styles';

// const defaultTheme = createTheme();

// A custom theme for this app
const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: '#e0b0e9',
					fontWeight: "bold",
          height: '45px',
          lineHeight: '45px',
					border: `unset`,
          paddingRight: '30px',
          paddingLeft: '30px',
					color: '#fff',
					borderRadius: 5,
          boxShadow: '0 3px 6px rgb(0 0 0 / 5%), 0 1px 3px rgb(0 0 0 / 11%)',
					'&:hover': {
						backgroundColor: '#e0b0e9',
						minWidth: 'auto',
					}
				}
			},
			// variants: [
			// 	{
			// 		props: {variant: "bold"},
			// 		style: {
			//
			// 		}
			// 	}
			// ]
		}
	},
	breakpoints: {
		values: {
			lg: 1232,
		}
	},
	direction: 'rtl',
	palette: {
		primary: {
			main: '#e0b0e9',
		},
	},
	typography: {
		fontFamily: "Vazirmatn, Roboto"
	},
});

export default theme;