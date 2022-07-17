import { Global, css } from '@emotion/react';

const DefaultStyle = css`
	html {
		font-size: 100%;
	}

	body {
		background-color: #f8f9fd;
		overflow-x: hidden;
	}

	//* design system 오버라이딩
	body {
		--wm-body-font-family: 'Noto Sans KR', sans-serif;
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
