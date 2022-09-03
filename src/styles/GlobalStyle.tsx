import { Global, css } from '@emotion/react';

const DefaultStyle = css`
	:root {
		--wm-body-font-family: 'Noto Sans KR', sans-serif;
	}

	html,
	body {
		height: 100%;
	}

	body {
		background-color: #f8f9fd;
		overflow-x: hidden;
	}

	a {
		text-decoration: none;
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
