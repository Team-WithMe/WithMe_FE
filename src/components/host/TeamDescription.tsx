import { ChangeEvent, FC } from 'react';
import { Card, Text, Title } from '@with-me/ui';

import { HostTitleWrapper } from './host.components.styled';

interface TeamNameProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const TeamDescription: FC<TeamNameProps> = ({ onChange, value }) => {
	return (
		<Card
			title={
				<HostTitleWrapper>
					<Title size="h5">📙 팀의 설명을 입력해주세요!</Title>
					<Text color="guide" size="sm" weight="light">
						공백없이 최대 200자 이내로 입력해주세요!
					</Text>
				</HostTitleWrapper>
			}
			fullSize
			px={20}
			py={20}
		>
			TeamDescription
		</Card>
	);
};

export default TeamDescription;
