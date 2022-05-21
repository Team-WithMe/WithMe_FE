import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
	bgColor: 'primary' | 'bgColor' | 'lineColor' | 'danger' | 'gray_aa' | 'gray_ee';
	color: 'primary' | 'gray_33' | 'white';
	fullSize: boolean;
	px?: number;
	py?: number;
}

export const ButtonContainer = styled.button<Props>`
	border: 0;
	border-radius: 4px;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	color: ${({ color, theme }) => theme.colors[color]};
	font-size: 16px;
	outline: none;
	transition: 400ms;
	cursor: pointer;

	${({ px, py }) => {
		const padding = { padding: '8px 12px' };
		if (px && !py) padding.padding = `8px ${px}px`;
		else if (py && !px) padding.padding = `${py}px 8px`;
		else if (px && py) padding.padding = `${py}px ${px}px`;

		return css`
			${padding};
		`;
	}}

	${({ fullSize }) =>
		fullSize &&
		css`
			width: 100%;
		`}

	&:hover {
		filter: brightness(80%);
	}

	:disabled {
		filter: grayscale(50%);
	}
`;
