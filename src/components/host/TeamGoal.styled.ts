import styled from '@emotion/styled';
import { Card } from '@with-me/ui';
import { ButtonWrapper } from './HostCardWrapper.styled';

const Wrapper = styled.div`
	display: flex;
	gap: 20px;
`;

const Menu = styled(Card)`
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

export default { Wrapper, Menu, TextWrapper, ButtonWrapper };
