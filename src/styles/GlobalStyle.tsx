import '@with-me/style/dist/global.css';

import { css, Global, useTheme } from '@emotion/react';

import { Pretendard } from './shared/fontFace';

const GlobalStyle = () => {
	const { colors } = useTheme();

	return (
		<Global
			styles={css`
				${Pretendard}

				html {
					font-family: Pretendard;
					font-size: 100%;
				}

				body {
					color: ${colors.gray_22};
					background-color: ${colors.bgColor};
					overflow-x: hidden;
				}

				html,
				body {
					height: 100%;
				}

				a {
					text-decoration: none;
				}
			`}
		/>
	);
};

export default GlobalStyle;
