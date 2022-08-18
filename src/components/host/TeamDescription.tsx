import { ChangeEvent, FC } from 'react';

interface TeamNameProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const TeamDescription: FC<TeamNameProps> = ({ onChange, value }) => {
	return <div>TeamDescription</div>;
};

export default TeamDescription;
