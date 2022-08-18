import type { NextPage } from 'next';

import ProgressBar from '@components/host/ProgressBar';
import TeamDescription from '@components/host/TeamDescription';
import TeamGoal from '@components/host/TeamGoal';
import TeamName from '@components/host/TeamName';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamSuccess from '@components/host/TeamSuccess';
import HostLayout from '@components/layouts/HostLayout';

//* team 생성 단계 별 컴포넌트 랜더링
const hostComponentData = {
	0: <TeamGoal />,
	1: <TeamSkillSeletor />,
	2: <TeamName />,
	3: <TeamDescription />,
	4: <TeamSuccess />
} as const;

const HostPage: NextPage = () => {
	return <HostLayout>HostPage</HostLayout>;
};

export default HostPage;
