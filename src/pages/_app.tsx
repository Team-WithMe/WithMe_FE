import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<div id="root-modal" />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
