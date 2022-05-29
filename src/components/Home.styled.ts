import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
	width: 75%;
	display: flex;
	height: 400px;
	margin: 200px auto;
	justify-content: space-between;
	.home-title {
		font-size: 40px;
		line-height: 54px;
		font-weight: 400;
		color: #333333;
	}

	.home-sub-title {
		line-height: 54px;
		color: #333333;
		font-size: 18px;
	}

	.home-title-span {
		font-weight: 700;
		font-size: 40px;
		line-height: 54px;
		color: #333333;
	}

	.sub-title-span {
		color: #6c5ce7;
	}
	.button-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 155px;
		height: 44px;
		background-color: #6c5ce7;
		border-radius: 5px;
	}
`;
