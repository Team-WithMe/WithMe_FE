import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { NextPage } from 'next';

import TeamDescription from '@components/host/TeamDescription';
import TeamGoal from '@components/host/TeamGoal';
import TeamName from '@components/host/TeamName';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamSuccess from '@components/host/TeamSuccess';
import HostLayout from '@components/layouts/HostLayout';
import type { RootState } from '@store/rootReducer';

const HostPage: NextPage = () => {
	const { hostPageNum } = useSelector((state: RootState) => state.host);

	//* team 생성 스탭 별 컴포넌트 목록
	const HOST_COMPONENT_DATA = useMemo(
		() => ({
			0: <TeamGoal />,
			1: <TeamSkillSeletor />,
			2: <TeamName />,
			3: <TeamDescription />,
			4: <TeamSuccess />
		}),
		[]
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
