import { FC } from 'react';
import styled from '@emotion/styled';
import { Close } from '@with-me/icons';
import { colors } from '@styles/theme';

const CloseIcon = styled(Close)`
	cursor: pointer;
	position: absolute;
	top: 16px;
	right: 16px;
`;

interface ModalCloseIconProps {
	onClick: () => void;
}

const ModalCloseIcon: FC<ModalCloseIconProps> = ({ onClick }) => (
	<CloseIcon width={24} height={24} fill={colors.gray_77} onClick={onClick} />
);

export default ModalCloseIcon;
