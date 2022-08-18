import { ChangeEvent, FC } from 'react';

interface TeamNameProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const TeamName: FC<TeamNameProps> = ({ onChange, value }) => {
	console.log(value);

	return <div>TeamName</div>;
};

export default TeamName;
