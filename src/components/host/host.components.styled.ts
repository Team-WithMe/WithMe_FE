import styled from '@emotion/styled';
import { Card, Text } from '@with-me/ui';

//* commons
export const HostTitleWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 5px;
	position: relative;
`;

export const HostTitleSuffix = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	gap: 3px;
`;

//* goal component styled
export const GoalCardWrapper = styled.div`
	display: flex;
	gap: 20px;
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
	gap: 8px;
`;

//* skill seletor component styled
export const SkillPageMoveText = styled(Text)`
	cursor: pointer;

	&:hover {
	}
`;
