import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Textarea, Title } from '@with-me/ui';

import type { RootState } from '@store/rootReducer';
import { onChangeTeamDescription } from '@store/host/host.slice';
import { HostTitleWrapper } from './host.components.styled';

const TeamDescription = () => {
	const dispatch = useDispatch();
	const { teamDescription: value } = useSelector((state: RootState) => state.host);

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		dispatch(onChangeTeamDescription(e.target.value));

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
			<Textarea value={value} onChange={onChange} placeholder="팀의 설명을 입력해주세요!" />
		</Card>
	);
};

export default TeamDescription;
