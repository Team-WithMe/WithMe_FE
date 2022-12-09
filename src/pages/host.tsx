import { Text } from '@with-me/ui';
import { CSSProperties, Dispatch, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	CommonModal,
	HostLayout,
	ProgressBar,
	TeamDesc,
	TeamGoal,
	TeamName,
	TeamSkillSeletor,
	TeamSuccess
} from '../components';
import { HOST_PAGE_DATA, SKILLS } from '../constants';
import { useModal, useRouterPush } from '../hooks';
import { createTeamAction, nextHostPageAction, prevHostPageAction, RootState } from '../store';
import type { CreateTeamAPIBodyType } from '../types';

const HostPage = () => {
	const dispatch = useDispatch();
	const { hostPageNum, teamGoal, teamSkills, teamName, teamDesc } = useSelector(
		(state: RootState) => state.host
	);

	const {
		ModalPortal: CreateTeamModalProtal,
		onCloseModal: onCloseCreateTeamModal,
		onOpenModal: onOpenCreateTeamModal
	} = useModal();
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
			category: teamGoal,
			skills: teamSkills,
			name: teamName,
			description: teamDesc
		};

		(dispatch as Dispatch<any>)(createTeamAction(data));
	}, [dispatch, teamDesc, teamGoal, teamName, teamSkills]);

	/** @description team 생성 스탭 별 컴포넌트 목록 */
	const HOST_COMPONENT_DATA = useMemo(
		() => ({
			0: <TeamGoal onMoveToHostPage={onMoveToHostPage} onMoveToHome={onMoveToPage('/')} />,
			1: <TeamSkillSeletor onMoveToHostPage={onMoveToHostPage} />,
			2: <TeamName onMoveToHostPage={onMoveToHostPage} />,
			3: <TeamDesc onOpenModal={onOpenCreateTeamModal} />,
			4: <TeamSuccess />
		}),
		[onMoveToPage, onMoveToHostPage, onOpenCreateTeamModal]
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

	const skillListStyle: CSSProperties = useMemo(() => ({ display: 'flex', gap: '8px' }), []);

	return (
		<>
			<HostLayout title={HOST_PAGE_DATA[hostPageNum].title}>
				<ProgressBar percent={HOST_PAGE_DATA[hostPageNum].percent} />
				<HostComponent />
			</HostLayout>
			<CreateTeamModalProtal>
				<CommonModal
					title="팀 생성하기"
					closeButton="취소"
					checkButton="팀만들기"
					onCloseModal={onCloseCreateTeamModal}
					onClickCheck={onCreateTeam}
				>
					<div style={skillListStyle}>
						{teamSkills.map(skill =>
							SKILLS.map(({ Icon, name }) => name === skill && <Icon width={30} height={30} />)
						)}
					</div>
					<Text color="description">
						팀 목적: {teamGoal === 'project' ? '팀 프로젝트' : '스터디'}
					</Text>
					<Text color="description">팀 이름: {teamName}</Text>
					<Text color="description">팀 설명: {teamDesc}</Text>
					<Text color="description">해당 정보가 맞는지 한번 더 확인해주세요!</Text>
				</CommonModal>
			</CreateTeamModalProtal>
		</>
	);
};

export default HostPage;
