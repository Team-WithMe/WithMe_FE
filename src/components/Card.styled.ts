import styled from '@emotion/styled';

export const CardWrapper = styled.div`
	width: 75%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;

	.card-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		width: 280px;
		height: 260px;
		margin: 10px;
		cursor: pointer;
	}

	.card-item {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		color: #808080;
	}

	.card-item {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		color: #808080;
		margin-top: 20px;
	}

	.card-title {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		color: #222222;
		padding: 5px;
	}

	.card-date {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		color: #808080;
	}

	.card-stack {
		display: flex;
		padding: 10px;
		justify-content: center;
		align-items: center;
	}

	.card-imgs img {
		display: flex;
		width: 50px;
		height: 50px;
		margin: 5px auto;
	}

	.card-imgs div {
		padding: 5px;
	}

	.card-coment span {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		color: #808080;
		padding: 5px;
	}
`;
