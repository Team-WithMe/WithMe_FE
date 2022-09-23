import styled from '@emotion/styled';

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

export const ButtonGruop = styled.div`
	display: flex;
	gap: 4px;
	justify-content: flex-end;
`;
