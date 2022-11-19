import styled from '@emotion/styled';
import { Card } from '@with-me/ui';

export { ButtonWrapper } from './HostCardWrapper.styled';

export const Wrapper = styled.div`
	display: flex;
	gap: 20px;
`;

export const Menu = styled(Card)`
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;
