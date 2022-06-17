import { createTheme, unstable_createMuiStrictModeTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   light: '#FFEDED',
    //   main: '#FF2E5A',
    //   dark: '#ba000d',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#FFEDED',
    //   main: '#FF2E5A',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1140,
      xl: 1360,
    },
  },
})

export default theme