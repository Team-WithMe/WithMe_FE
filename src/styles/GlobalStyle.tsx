import { Global, css, useTheme } from '@emotion/react';

const GlobalStyle = () => {
	const { colors } = useTheme();

	return (
		<Global
			styles={css`
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
