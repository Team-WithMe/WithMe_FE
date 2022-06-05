import styled from '@emotion/styled';

export const LoginModalWrapper = styled.div`
	width: 674px;
	height: 578px;
	background-color: #fff;
	border-radius: 10px;

	.login-email-input {
		display: flex;
		border: 1px solid #b0b0b0;
		border-radius: 4px;
		width: 94%;
		height: 40px;
		margin: 5px auto;
	}

	.login-email-input-error {
		display: flex;
		border: 1px solid #b0b0b0;
		border-radius: 4px;
		width: 94%;
		height: 40px;
		margin: 5px auto;
		background: #fff8f6;
		border: 1px solid #e74c3c;
	}

	.login-password-input {
		display: flex;
		border: 1px solid #b0b0b0;
		border-radius: 4px;
		width: 94%;
		height: 40px;
		margin: 5px auto;
	}

	.login-password-input-error {
		display: flex;
		border: 1px solid #b0b0b0;
		border-radius: 4px;
		width: 94%;
		height: 40px;
		margin: 5px auto;
		background: #fff8f6;
		border: 1px solid #e74c3c;
	}

	.login-modal-logo {
		display: flex;
		justify-content: center;
		padding-top: 40px;
	}

	.login-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 25px auto 25px;
		width: 95%;
	}

	.login-sub-title {
		display: flex;
		justify-content: center;

		span {
			color: #6c5ce7;
		}
	}

	.login-line {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 30px 0 30px;
		span {
			color: #b0b0b0;
		}
		hr {
			width: 42.5%;
			border: 0.5px solid #b0b0b0;
		}
	}

	.login-github-btn {
		position: relative;
		display: flex;
		justify-content: center;
		margin: 50px auto;
		width: 95%;
		background-color: #222222;
	}

	.github-image {
		position: absolute;
		left: 2%;
		top: 20%;
	}

	.login-modal-title {
		display: flex;
		justify-content: center;
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 30px;
		line-height: 54px;
		text-align: center;
		margin: 20px 0 20px 0;
		color: #222222;
	}

	.close-btn {
		cursor: pointer;
		position: absolute;
		right: 50px;
		top: 40px;
		width: 24px;
		height: 24px;
		margin-top: 7px;
	}

	.signup-btn {
		cursor: pointer;
	}
`;
