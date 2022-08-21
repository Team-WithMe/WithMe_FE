import { useSelector } from 'react-redux';
import type { RootState } from '@store/rootReducer';

const TeamSuccess = () => {
	const { teamGoal, teamSkills, teamName, teamDescription } = useSelector(
		(state: RootState) => state.host
	);

	console.log('teamGoal', teamGoal);
	console.log('teamSkills', teamSkills);
	console.log('teamName', teamName);
	console.log('teamDescription', teamDescription);

	return <div>TeamSuccess</div>;
};

export default TeamSuccess;
