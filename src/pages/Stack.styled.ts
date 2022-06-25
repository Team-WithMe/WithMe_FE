import styled from '@emotion/styled';

export const StackModalWrapper = styled.div`
	width: 674px;
	height: auto;
	background-color: #fff;
	border-radius: 10px;

	.close-btn {
		cursor: pointer;
		position: absolute;
		right: 30px;
		top: 30px;
		width: 24px;
		height: 24px;
		margin-top: 7px;
	}

	.input-wrapper {
		display: flex;
		justify-content: center;
		padding-top: 80px;
	}

	.stack-select-wrapper {
		display: flex;
		width: 90%;

		flex-wrap: wrap;
		flex-direction: row;
		margin: auto;
	}

	.stack-modal-input {
		display: flex;
		width: 90%;
		height: 48px;
		background: #ffffff;
		border: 1px solid #b0b0b0;
		border-radius: 50px;
	}

	.stack-modal-title {
		margin: 20px 0 0 30px;
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		color: #222222;
	}

	.stack-select {
		/* display: flex; */
		/* width: 100%; */

		/* justify-content: center;
		align-items: center;
		margin: auto; */
		flex: 0 1 auto;
	}

	.stack-select-span {
		display: flex;
		padding: 10px 10px 10px 10px;
		background: #f1f3f7;
		border-radius: 50px;
		border: 1px solid grey;
		margin: 10px 0px 10px 10px;
		cursor: pointer;
	}

	.stack-select-click {
		display: flex;
		color: #6c5ce7;
		padding: 10px 10px 10px 10px;
		background: #f1f3f7;
		border-radius: 50px;
		border: 1px solid #6c5ce7;
		margin: 10px 0px 10px 10px;
		cursor: pointer;
	}

	.stack-select img {
		width: 12px;
		height: 12px;
		margin-left: 10px;
		margin-top: 5px;
	}

	/* .stack-first-stack {
		padding: 10px 20px 10px 20px;
		background: #f1f3f7;
		border-radius: 50px;
	} */

	.select-container {
		display: flex;
		/* flex-wrap: wrap; */
		width: 90%;
		background-color: #f1f3f7;
		margin: 20px auto;

		flex-wrap: wrap;
	}

	.select-container span {
		display: flex;
		color: #6c5ce7;
		padding: 10px 10px 10px 10px;
		background: #f1f3f7;
		border-radius: 50px;
		border: 1px solid #6c5ce7;
		margin: 10px 0px 10px 10px;
		cursor: pointer;
		justify-content: center;
		align-items: center;

		img {
			width: 12px;
			height: 12px;
			margin-left: 10px;
			margin-top: 5px;
		}
	}

	.team-modal-desc {
		width: 90%;
		margin: auto;
	}

	.add-stack-close {
		width: 15px;
		height: 15px;
	}

	.btn-wrapper {
		display: flex;
		width: 90%;
		align-items: center;
		justify-content: center;
		margin: auto;
	}

	.btn-wrapper button {
		width: 100%;
		margin: 10px 10px 20px 10px;
		border-radius: 5px;
		color: #222222;
	}
`;
