import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Card, Text, Title } from '@with-me/ui';

import * as URI from '@lib/constants/image.url';
import type { RootState } from '@store/rootReducer';
import { onChangeTeamGoal } from '@store/host/host.slice';
import { colors } from '@styles/theme';
import type { HostGoalType } from '@typings/host';
import {
	GoalCard,
	GoalCardWrapper,
	GoalTextWrapper,
	HostTitleWrapper
} from './host.components.styled';

const TeamGoal = () => {
	const dispatch = useDispatch();
	const { teamGoal } = useSelector((state: RootState) => state.host);

	const onChangeGoal = useCallback(
		(seleteGoal: HostGoalType) => () => dispatch(onChangeTeamGoal(seleteGoal)),
		[dispatch]
	);

	const goalCardBorderColor = useCallback(
		(currentGoal: HostGoalType) => (teamGoal === currentGoal ? colors.primary : undefined),
		[teamGoal]
	);

	return (
		<Card
			title={
				<HostTitleWrapper>
					<Title size="h5">📕 팀의 목적을 선택해주세요!</Title>
					<Text color="guide" size="sm" weight="light">
						클릭해서 선택해주세요!
					</Text>
				</HostTitleWrapper>
			}
			fullSize
			px={20}
			py={20}
		>
			<GoalCardWrapper>
				{/* project */}
				<GoalCard
					fullSize
					isHover
					borderColor={goalCardBorderColor('project')}
					onClick={onChangeGoal('project')}
				>
					<Image src={URI.TEAM_GOAL_PROJECT_URI} width={100} height={100} />
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
					isHover
					borderColor={goalCardBorderColor('study')}
					onClick={onChangeGoal('study')}
				>
					<Image src={URI.TEAM_GOAL_STUDY_URI} width={100} height={100} />
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
