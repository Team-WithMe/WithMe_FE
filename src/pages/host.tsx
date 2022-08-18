import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import type { NextPage } from 'next';

import TeamDescription from '@components/host/TeamDescription';
import TeamGoal from '@components/host/TeamGoal';
import TeamName from '@components/host/TeamName';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamSuccess from '@components/host/TeamSuccess';
import HostLayout from '@components/layouts/HostLayout';
import useInput from '@hooks/useInput';
import type { RootState } from '@store/rootReducer';
import type { HostGoalType } from '@typings/host';

const HostPage: NextPage = () => {
	const { hostPageNum } = useSelector((state: RootState) => state.host);

	const [goal, setGoal] = useState<HostGoalType>('project');
	const [skills, setSkills] = useState([]);

	const [teamName, onChangeTeamName] = useInput('');
	const [teamDescription, onChangeTeamDescription] = useInput('');

	//* team 생성 스탭 별 컴포넌트 목록
	const HOST_COMPONENT_DATA = useMemo(
		() => ({
			0: <TeamGoal goal={goal} setGoal={setGoal} />,
			1: <TeamSkillSeletor />,
			2: <TeamName value={teamName} onChange={onChangeTeamName} />,
			3: <TeamDescription value={teamDescription} onChange={onChangeTeamDescription} />,
			4: <TeamSuccess />
		}),
		[goal, onChangeTeamDescription, onChangeTeamName, teamDescription, teamName]
	);

	//* 해당 스탭에 컴포넌트 랜더링
	const HostComponent = useCallback(
		() => HOST_COMPONENT_DATA[hostPageNum],
		[HOST_COMPONENT_DATA, hostPageNum]
	);

	return (
		<HostLayout>
			<HostComponent />
		</HostLayout>
	);
};

export default HostPage;
