import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';
import wrapper from '@store/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>쉽고 간편하게 스터디와 프로젝트 팀을 구할 수 있는 온라인 스터디 매칭 플랫폼 With Me</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<div id="root-modal" />
			</ThemeProvider>
		</>
	);
};

export default wrapper.withRedux(MyApp);
