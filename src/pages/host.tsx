import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { NextPage } from 'next';
import { Title } from '@with-me/ui';
import styled from '@emotion/styled';

import Logo from '@components/common/Logo';
import ProgressBar from '@components/host/ProgressBar';
import TeamDesc from '@components/host/TeamDesc';
import TeamGoal from '@components/host/TeamGoal';
import TeamName from '@components/host/TeamName';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamSuccess from '@components/host/TeamSuccess';
import CreateTeamModal from '@components/modals/CreateTeamModal';
import useModal from '@hooks/useModal';
import { HOST_PAGE_DATA } from '@lib/constants/host';
import type { RootState } from '@store/rootReducer';
import { createTeamAction } from '@store/host/host.actions';
import { nextHostPageAction, prevHostPageAction } from '@store/host/host.slice';
import type { CreateTeamAPIBodyType } from '@typings/host';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	width: 90%;
	max-width: 812px;
	margin: 50px auto 0;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const HostPage: NextPage = () => {
	const dispatch = useDispatch();
	const { hostPageNum, teamGoal, teamSkills, teamName, teamDesc } = useSelector(
		(state: RootState) => state.host
	);

	const { ModalPortal, onCloseModal, onOpenModal } = useModal();

	const onMoveToHostPage = useCallback(
		(move: 'prev' | 'next') => () => {
			if (move === 'prev') dispatch(prevHostPageAction());
			else dispatch(nextHostPageAction());
		},
		[dispatch]
	);

	const onCreateTeam = useCallback(() => {
		const data: CreateTeamAPIBodyType = {
			goal: teamGoal,
			skills: teamSkills,
			name: teamName,
			description: teamDesc
		};

		dispatch(createTeamAction(data) as any);
	}, [dispatch, teamDesc, teamGoal, teamName, teamSkills]);

	//* team 생성 스탭 별 컴포넌트 목록
	const HOST_COMPONENT_DATA = useMemo(
		() => ({
			0: <TeamGoal onMoveToHostPage={onMoveToHostPage} />,
			1: <TeamSkillSeletor onMoveToHostPage={onMoveToHostPage} />,
			2: <TeamName onMoveToHostPage={onMoveToHostPage} />,
			3: <TeamDesc onMoveToHostPage={onMoveToHostPage} onOpenModal={onOpenModal} />,
			4: <TeamSuccess />
		}),
		[onMoveToHostPage, onOpenModal]
	);

	//* 해당 스탭에 컴포넌트 랜더링
	const HostComponent = useCallback(
		() => HOST_COMPONENT_DATA[hostPageNum],
		[HOST_COMPONENT_DATA, hostPageNum]
	);

	return (
		<>
			<Container>
				<Logo />
				<Title>{HOST_PAGE_DATA[hostPageNum].title}</Title>
				<Wrapper>
					<ProgressBar percent={HOST_PAGE_DATA[hostPageNum].percent} />
					<HostComponent />
				</Wrapper>
			</Container>
			<ModalPortal>
				<CreateTeamModal onCreateTeam={onCreateTeam} onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	);
};

export default HostPage;
