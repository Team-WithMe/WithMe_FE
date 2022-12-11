import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import { GlobalStyle, theme } from '../styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
	// const { pageProps } = props;

	return (
		<>
			{/* <Provider store={store}> */}
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
				<div id="root-modal" />
			</ThemeProvider>
			{/* </Provider> */}
		</>
	);
};

export default MyApp;
