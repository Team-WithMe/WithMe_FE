import Card from '@components/common/Card';
import { HostCard } from '@pages/host/styled';
import { GoalWrapper } from './TeamGoal.styled';

const TeamGoal = () => {
	return (
		<HostCard border="light-gray" title={<div>📕 팀의 목적을 선택해주세요!</div>}>
			<GoalWrapper></GoalWrapper>
		</HostCard>
	);
};

export default TeamGoal;
