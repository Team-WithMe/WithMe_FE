import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const DefaultStyle = css`
	${emotionReset}

	html {
		font-size: 100%;

		* {
			color: #333;
		}
	}

	body {
		background-color: #f8f9fd;
		overflow-x: hidden;
		line-height: 1.4;
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 1em;
		box-sizing: border-box;
		button {
			cursor: pointer;
		}
		input,
		button {
			border: none;
			&:focus,
			&:active {
				outline: none;
				box-shadow: none;
			}
		}
		a {
			text-decoration: none;
		}
	}
	@media (min-width: 300px) {
		html {
			font-size: 60%;
		}
	}
	@media (min-width: 500px) {
		html {
			font-size: 75%;
		}
	}
	@media (min-width: 700px) {
		html {
			font-size: 90%;
		}
	}
	@media (min-width: 1200px) {
		html {
			font-size: 100%;
		}
	}
`;

const GlobalStyle = () => {
	return <Global styles={DefaultStyle} />;
};

export default GlobalStyle;
