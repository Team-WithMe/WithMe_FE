import styled from '@emotion/styled';
import { Card } from '@with-me/ui';
import { ButtonWrapper } from './HostCardWrapper.styled';

const SkillList = styled.div`
	padding-bottom: 12px;
	display: flex;
	align-items: center;
	gap: 8px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 8px;

	@media ${({ theme }) => theme.device.tabletL} {
		grid-template-columns: repeat(3, 1fr);
	}

	@media ${({ theme }) => theme.device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Item = styled(Card)`
	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}
`;

export default { SkillList, Grid, Item, ButtonWrapper };
