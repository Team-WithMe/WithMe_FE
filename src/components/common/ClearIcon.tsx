import { FC } from 'react';
import styled from '@emotion/styled';
import { XCircle } from '@with-me/icons';

const Icon = styled(XCircle)`
	fill: ${({ theme }) => theme.colors.gray_77};
	cursor: pointer;
	transform: 250ms;

	&:hover {
		fill: ${({ theme }) => theme.colors.primary};
	}
`;

interface ClearIconProps {
	onClick: () => void;
}

const ClearIcon: FC<ClearIconProps> = ({ onClick }) => <Icon onClick={onClick} />;

export default ClearIcon;
