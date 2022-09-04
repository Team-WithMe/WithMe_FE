import styled from '@emotion/styled';
import { XCircle } from '@with-me/icons';

export const ValueClearButton = styled(XCircle)`
	fill: #777;
	cursor: pointer;
	transform: 250ms;

	&:hover {
		fill: ${({ theme }) => theme.colors.primary};
	}
`;
