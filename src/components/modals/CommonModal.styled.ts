import styled from '@emotion/styled';
import { Button as WmButton } from '@with-me/ui';
import { Close } from '@with-me/icons';

export const Container = styled.div`
	min-width: 420px;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 24px 30px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	border-radius: 8px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const CloseIcon = styled(Close)`
	cursor: pointer;
	position: absolute;
	top: 16px;
	right: 16px;
`;

export const ButtonGruop = styled.div`
	display: flex;
	gap: 4px;
	justify-content: flex-end;
`;

export const Button = styled(WmButton)`
	min-width: 80px;
`;
