import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Button, Text } from '@with-me/ui';

import { IMG_URL } from '../../constants';
import { useModal } from '../../hooks';
import { changeTeamGoalAction, RootState } from '../../store';
import { colors } from '../../styles';
import type { HostComponentProps, HostGoalType } from '../../types';
import { CommonModal, HostCardWrapper } from '../../components';
import * as S from './TeamGoal.styled';

interface TeamGoalProps extends HostComponentProps {
	onMoveToHome: () => Promise<boolean>;
}

const TeamGoal: FC<TeamGoalProps> = ({ onMoveToHome, onMoveToHostPage }) => {
	const dispatch = useDispatch();
	const { teamGoal } = useSelector((state: RootState) => state.host);

	const { ModalPortal, onCloseModal, onOpenModal } = useModal();

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
			<HostCardWrapper title="📕 팀의 목적을 선택해주세요!" description="클릭해서 선택해주세요!">
				<S.Wrapper>
					<S.Menu
						fullSize
						isHover
						borderColor={goalCardBorderColor('project')}
						onClick={onChangeGoal('project')}
					>
						<Image src={IMG_URL.TEAM_GOAL_PROJECT_IMG_URI} width={100} height={100} />
						<S.TextWrapper>
							<Text color="guide" weight="light">
								같이 서비스를 만들 팀원을 구해보세요!
							</Text>
							<Text size="xxl">팀프로젝트</Text>
						</S.TextWrapper>
					</S.Menu>
					<S.Menu
						fullSize
						isHover
						borderColor={goalCardBorderColor('study')}
						onClick={onChangeGoal('study')}
					>
						<Image src={IMG_URL.TEAM_GOAL_STUDY_IMG_URI} width={100} height={100} />
						<S.TextWrapper>
							<Text color="guide" weight="light">
								함께 성장할 팀원을 모아보세요!
							</Text>
							<Text size="xxl">스터디</Text>
						</S.TextWrapper>
					</S.Menu>
				</S.Wrapper>
			</HostCardWrapper>
			<S.ButtonWrapper>
				<Button onClick={onOpenModal} fullSize type="gray">
					홈으로 돌아가기
				</Button>
				<Button onClick={onMoveToHostPage('next')} fullSize>
					다음 단계로 넘어가기
				</Button>
			</S.ButtonWrapper>
			<ModalPortal>
				<CommonModal
					title="홈으로 돌아가시겠습니까?"
					description="변경사항이 저장되지 않고 홈으로 돌아갑니다."
					checkButton="확인"
					closeButton="취소"
					onClickCheck={onMoveToHome}
					onCloseModal={onCloseModal}
				/>
			</ModalPortal>
		</>
	);
};

export default TeamGoal;
