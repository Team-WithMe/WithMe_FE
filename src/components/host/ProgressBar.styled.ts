import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const gradientKeyframes = keyframes`
	0% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const gradientAnimation = css`
	animation: ${gradientKeyframes} 10s ease infinite;
`;

export const Container = styled.div`
	width: 100%;
	height: 15px;
	background-color: white;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	border-radius: 10px;
	transition: 0.3s;

	@media ${({ theme }) => theme.device.tabletL} {
		border-radius: 5px;
	}
`;

export const Item = styled.div<{ percent: number }>`
	width: ${({ percent }) => percent}%;
	height: 100%;
	background: linear-gradient(
		-45deg,
		${({ theme }) => theme.colors.primary},
		${({ theme }) => theme.colors.secondary},
		#3498db,
		#2980b9
	);
	background-size: 200% 200%;
	border-radius: inherit;
	transition: 0.3s;
	${gradientAnimation};
`;
