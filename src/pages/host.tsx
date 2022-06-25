import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Card from '@components/common/Card';
import HostLayout from '@components/layout/HostLayout';
import TeamGoal from '@components/host/TeamGoal';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamName from '@components/host/TeamName';
import TeamDescription from '@components/host/TeamDescription';
import TeamSuccess from '@components/host/TeamSuccess';
import { RootState } from '@store/rootReducer';
import { Button } from '@with-me/design';

const HostPage = () => {
	const { hostPageNum } = useSelector((state: RootState) => state.host);

	const hostComponentData = useMemo(
		() => ({
			0: <TeamGoal />,
			1: <TeamSkillSeletor />,
			2: <TeamName />,
			3: <TeamDescription />,
			4: <TeamSuccess />
		}),
		[]
	);

	const HostComponent = useCallback(() => hostComponentData[hostPageNum], [hostComponentData, hostPageNum]);

	return (
		<HostLayout>
			<Card>
				<HostComponent />
			</Card>
			<Button px={12} py={24}>
				test
			</Button>
		</HostLayout>
	);
};

export default HostPage;
