import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 80px;
	.header-title {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 24px;
		color: #777777;
	}
	.button-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 155px;
		height: 44px;
		background-color: #6c5ce7;
		border-radius: 10px;
	}
`;
