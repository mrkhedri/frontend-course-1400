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
		},
    MuiAccordion:{
      styleOverrides: {
        root: {
          borderRadius: '4px',
          margin: '5px 0',
          boxShadow: '0 2px 10px rgb(31 45 61 / 16%)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '5px 0',
          },
          '&:hover .MuiAccordionSummary-expandIconWrapper': {
            backgroundColor: '#e0b0e9',
          },
          '&:hover .MuiAccordionSummary-expandIconWrapper svg': {
            fill: '#fff',
          }
        }
      }
    },
    MuiAccordionSummary:{
      styleOverrides: {
        expandIconWrapper: {
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          background: '#f1f3f5',
          borderRadius: '50px',
          padding: '2px',

          '&.Mui-expanded': {
            transform: 'none',
          },
          'svg': {
            transition: 'fill 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          }
        }
      }
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