import styled from '@emotion/styled';
import { Card } from '@with-me/ui';

//* commons
export const HostTitleWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 5px;
`;

//* goal component styled
export const GoalCardWrapper = styled.div`
	display: flex;
	gap: 30px;
`;

export const GoalCard = styled(Card)`
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

export const GoalTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`;
