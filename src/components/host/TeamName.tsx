import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input, Title } from '@with-me/ui';

import type { RootState } from '@store/rootReducer';
import { onChangeTeamName } from '@store/host/host.slice';
import { HostTitleWrapper } from './host.components.styled';

const TeamName = () => {
	const dispatch = useDispatch();
	const { teamName: value } = useSelector((state: RootState) => state.host);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(onChangeTeamName(e.target.value));

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
			<Input placeholder="팀 이름을 입력해주세요!" value={value} onChange={onChange} />
		</Card>
	);
};

export default TeamName;
