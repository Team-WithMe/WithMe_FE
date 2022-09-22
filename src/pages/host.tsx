import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CreateTeamModal } from '@components/modals';
import useModal from '@hooks/useModal';
import useRouterPush from '@hooks/useRouterPush';
import { HOST_PAGE_DATA } from '@lib/constants/host';
import type { RootState } from '@store/rootReducer';
import { createTeamAction } from '@store/host/host.actions';
import { nextHostPageAction, prevHostPageAction } from '@store/host/host.slice';
import type { CreateTeamAPIBodyType } from '@typings/host';
import HostLayout from '@components/host/HostLayout';
import TeamGoal from '@components/host/TeamGoal';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamName from '@components/host/TeamName';
import TeamDesc from '@components/host/TeamDesc';
import TeamSuccess from '@components/host/TeamSuccess';
import ProgressBar from '@components/host/ProgressBar';

const HostPage = () => {
	const dispatch = useDispatch();
	const { hostPageNum, teamGoal, teamSkills, teamName, teamDesc } = useSelector(
		(state: RootState) => state.host
	);

	const { ModalPortal, onCloseModal, onOpenModal } = useModal();
	const { onMoveToPage } = useRouterPush();

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
			0: <TeamGoal onMoveToHostPage={onMoveToHostPage} onMoveToHome={onMoveToPage('/')} />,
			1: <TeamSkillSeletor onMoveToHostPage={onMoveToHostPage} />,
			2: <TeamName onMoveToHostPage={onMoveToHostPage} />,
			3: <TeamDesc onMoveToHostPage={onMoveToHostPage} onOpenModal={onOpenModal} />,
			4: <TeamSuccess />
		}),
		[onMoveToPage, onMoveToHostPage, onOpenModal]
	);

	//* 해당 스탭에 컴포넌트 랜더링
	const HostComponent = useCallback(
		() => HOST_COMPONENT_DATA[hostPageNum],
		[HOST_COMPONENT_DATA, hostPageNum]
	);

	const preventClose = (e: BeforeUnloadEvent) => {
		e.preventDefault();
		e.returnValue = '';
	};

	useEffect(() => {
		window.addEventListener('beforeunload', preventClose);
		return () => {
			window.removeEventListener('beforeunload', preventClose);
		};
	}, []);

	return (
		<>
			<HostLayout title={HOST_PAGE_DATA[hostPageNum].title}>
				<ProgressBar percent={HOST_PAGE_DATA[hostPageNum].percent} />
				<HostComponent />
			</HostLayout>
			<ModalPortal>
				<CreateTeamModal onCreateTeam={onCreateTeam} onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	);
};

export default HostPage;
