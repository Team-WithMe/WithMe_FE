import styled from '@emotion/styled';

export const HostLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	max-width: 812px;
	width: 90%;
	margin: 50px auto 0;

	.host {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			font-weight: 600;
		}

		&__button-group {
			display: flex;
		}
	}
`;
