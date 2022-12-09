import { FC } from 'react';
import styled from '@emotion/styled';
import { Close } from '@with-me/icons';

const Icon = styled(Close)`
	cursor: pointer;
	position: absolute;
	top: 16px;
	right: 16px;
`;

interface CloseIconProps {
	onClick: () => void;
}

const CloseIcon: FC<CloseIconProps> = ({ onClick }) => (
	<Icon width={24} height={24} onClick={onClick} />
);

export default CloseIcon;
