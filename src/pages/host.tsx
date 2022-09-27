import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	CreateTeamModal,
	HostLayout,
	ProgressBar,
	TeamDesc,
	TeamGoal,
	TeamName,
	TeamSkillSeletor,
	TeamSuccess
} from '../components';
import { HOST_PAGE_DATA } from '../constants';
import { useModal, useRouterPush } from '../hooks';
import { createTeamAction, nextHostPageAction, prevHostPageAction, RootState } from '../store';
import type { CreateTeamAPIBodyType } from '../types';

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

	/** @description team 생성 스탭 별 컴포넌트 목록 */
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

	/** @description 해당 스탭에 컴포넌트 랜더링 */
	const HostComponent = useCallback(
		() => HOST_COMPONENT_DATA[hostPageNum],
		[HOST_COMPONENT_DATA, hostPageNum]
	);

	const preventClose = (e: BeforeUnloadEvent) => {
		e.preventDefault();
		e.returnValue = '';
	};

	/** @description host page내 새로고침 한번 더 확인 */
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
