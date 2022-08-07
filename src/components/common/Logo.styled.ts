import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { LogoIcon } from '@assets/icons/common';

export const LogoContainer = styled.div<{ noLink?: boolean }>`
	cursor: pointer;
	transition: 0.3s;

	${({ noLink }) =>
		noLink &&
		css`
			pointer-events: none;
		`}

	&:hover {
		filter: brightness(70%);
	}

	a {
		display: flex;
		align-items: center;
		gap: 6px;

		span {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 600;
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	@media ${({ theme }) => theme.device.tablet} {
		a {
			gap: 5px;
		}
	}
`;

export const LogoIconStyled = styled(LogoIcon)`
	width: 35px;
	height: 35px;

	@media ${({ theme }) => theme.device.tablet} {
		width: 25px;
	}

	@media ${({ theme }) => theme.device.mobileL} {
		width: 18px;
	}
`;
