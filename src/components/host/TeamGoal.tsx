import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Button, Card, Text, Title } from '@with-me/ui';

import * as URI from '@lib/constants/image.url';
import type { RootState } from '@store/rootReducer';
import { changeTeamGoalAction } from '@store/host/host.slice';
import { colors } from '@styles/theme';
import type { HostComponentProps, HostGoalType } from '@typings/host';
import {
	GoalCard,
	GoalCardWrapper,
	GoalTextWrapper,
	HostBtnGroup,
	HostTitleWrapper
} from './host.styled';

const TeamGoal: FC<HostComponentProps> = ({ onMoveToHostPage }) => {
	const dispatch = useDispatch();
	const { teamGoal } = useSelector((state: RootState) => state.host);

	const onChangeGoal = useCallback(
		(seleteGoal: HostGoalType) => () => dispatch(changeTeamGoalAction(seleteGoal)),
		[dispatch]
	);

	const goalCardBorderColor = useCallback(
		(currentGoal: HostGoalType) => (teamGoal === currentGoal ? colors.primary : undefined),
		[teamGoal]
	);

	return (
		<>
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
			<HostBtnGroup>
				<Button onClick={onMoveToHostPage('prev')} fullSize type="gray">
					홈으로 돌아가기
				</Button>
				<Button onClick={onMoveToHostPage('next')} fullSize>
					다음 단계로 넘어가기
				</Button>
			</HostBtnGroup>
		</>
	);
};

export default TeamGoal;
