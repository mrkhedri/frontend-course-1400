import {createTheme} from '@mui/material/styles';

// const defaultTheme = createTheme();

// A custom theme for this app
const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: '#e0b0e9',
					minWidth: 'auto',
					height: 50,
					width: '74%',
					fontWeight: "bold",
					border: `unset`,
					color: '#fff',
					borderRadius: 5,
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