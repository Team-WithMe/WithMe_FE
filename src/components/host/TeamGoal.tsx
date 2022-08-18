import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import { Card, Text, Title } from '@with-me/ui';

import { colors } from '@styles/theme';
import type { HostGoalType } from '@typings/host';
import {
	GoalCard,
	GoalCardWrapper,
	GoalTextWrapper,
	HostTitleWrapper
} from './host.components.styled';

interface TeamGoalProps {
	goal: HostGoalType;
	setGoal: Dispatch<SetStateAction<HostGoalType>>;
}

// Todo card 컴포넌트 props 적용 확인 시 인라인 스타일 -> fullSize props로 변경
const TeamGoal: FC<TeamGoalProps> = ({ goal, setGoal }) => {
	const onChangeGoal = (goal: HostGoalType) => () => setGoal(goal);

	return (
		<Card
			title={
				<HostTitleWrapper>
					<Title size="h4">📕 팀의 목적을 선택해주세요!</Title>
					<Text color="guide">클릭해서 선택해주세요!</Text>
				</HostTitleWrapper>
			}
			fullSize
			px={30}
			py={20}
		>
			<GoalCardWrapper>
				{/* project */}
				<GoalCard
					fullSize
					py={30}
					isHover
					borderColor={goal === 'project' ? colors.primary : undefined}
					onClick={onChangeGoal('project')}
				>
					<Image src="/images/team-goal-project.png" width={100} height={100} />
					<GoalTextWrapper>
						<Text color="guide" weight="light">
							같이 서비스를 만들 팀원을 구해보세요!
						</Text>
						<Text size="xxl">팀프로젝트</Text>
					</GoalTextWrapper>
				</GoalCard>
				{/* study */}
				<GoalCard
					fullSize
					py={30}
					isHover
					borderColor={goal === 'study' ? colors.primary : undefined}
					onClick={onChangeGoal('study')}
				>
					<Image src="/images/team-goal-study.png" width={100} height={100} />
					<GoalTextWrapper>
						<Text color="guide" weight="light">
							함께 성장할 팀원을 모아보세요!
						</Text>
						<Text size="xxl">스터디</Text>
					</GoalTextWrapper>
				</GoalCard>
			</GoalCardWrapper>
		</Card>
	);
};

export default TeamGoal;
