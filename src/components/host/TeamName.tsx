import { ChangeEvent, FC } from 'react';
import { Card, Text, Title } from '@with-me/ui';

import { HostTitleWrapper } from './host.components.styled';

interface TeamNameProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const TeamName: FC<TeamNameProps> = ({ onChange, value }) => {
	console.log(value);

	return (
		<Card
			title={
				<HostTitleWrapper>
					<Title size="h5">📘 팀의 이름을 정해주세요!</Title>
				</HostTitleWrapper>
			}
			fullSize
			px={20}
			py={20}
		>
			TeamName
		</Card>
	);
};

export default TeamName;
