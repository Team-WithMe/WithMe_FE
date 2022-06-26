import styled from '@emotion/styled';

export const CardContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	background-color: ${({ theme }) => theme.colors.white};
`;
