import styled from '@emotion/styled';

export const HostLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	width: 90%;
	max-width: 812px;
	margin: 50px auto 0;

	.host {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			font-weight: 600;
		}

		&__content {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 30px;
		}

		&__button-group {
			width: 100%;
			display: flex;
			gap: 10px;
		}
	}
`;
