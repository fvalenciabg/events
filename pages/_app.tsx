import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Layout>
		<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
  )
}

export default MyApp
