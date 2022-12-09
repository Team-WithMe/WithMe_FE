import styled from '@emotion/styled';

export const ModalContainer = styled.div`
	width: 800px;
	height: 620px;
	background-color: #fff;

	.modal-logo {
		display: flex;
		justify-content: center;
		padding-top: 40px;
	}

	.modal-title {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 500;
		font-size: 30px;
		line-height: 54px;
		text-align: center;
		margin-top: 10px;
		color: #222222;
	}

	.modal-sub-title {
		display: flex;
		justify-content: center;
	}

	.modal-content {
		display: flex;
		justify-content: center;
		text-align: center;

		button {
			color: #fff;
			margin-top: 10px;
		}

		div {
			font-size: 30px;
			padding: 5px;
		}

		span {
			font-size: 13px;
		}
	}

	.modal-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		width: 250px;
		height: 350px;

		background-color: #f8f9fd;
		margin-right: 7px;
		img {
			width: 75px;
			height: 75px;
		}
	}

	.modal-group:hover {
		border: 2px solid #6c5ce7;
	}

	.modal-party-member {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		margin-left: 7px;
		width: 250px;
		height: 350px;

		background-color: #f8f9fd;
	}

	.modal-party-member:hover {
		border: 2px solid #6c5ce7;
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
`;
