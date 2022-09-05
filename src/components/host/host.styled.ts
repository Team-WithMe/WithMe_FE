import styled from '@emotion/styled';
import { XCircle } from '@with-me/icons';
import { Card } from '@with-me/ui';

//* host page styled
export const HostContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	width: 90%;
	max-width: 812px;
	margin: 50px auto 0;
`;

export const HostContentWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

//* commons
export const HostTitleWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 5px;
	position: relative;
	height: auto;
`;

export const HostTitleSuffix = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	gap: 3px;
`;

export const HostBtnGroup = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	margin-bottom: 100px;
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
export const SkillWrapper = styled.div`
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

export const SkillList = styled.div`
	padding-bottom: 12px;
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const SkillCard = styled(Card)`
	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}
`;
