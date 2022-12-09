import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { theme, GlobalStyle } from '../styles';
import { wrapper } from '../store';
import '@with-me/style/dist/global.css';

const MyApp = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;

	return (
		<>
			<Head>
				<title>
					쉽고 간편하게 스터디와 프로젝트 팀을 구할 수 있는 온라인 스터디 매칭 플랫폼 With Me
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Provider store={store}>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
					<div id="root-modal" />
				</ThemeProvider>
			</Provider>
		</>
	);
};

export default MyApp;
