import { CSSProperties, FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Text, Textarea, Title } from '@with-me/ui';

import useInput from '@hooks/useInput';
import type { RootState } from '@store/rootReducer';
import { changeTeamDescAction } from '@store/host/host.slice';
import type { HostComponentProps } from '@typings/host';
import { HostBtnGroup, HostTitleWrapper } from './host.styled';

interface TeamDescProps extends HostComponentProps {
	onOpenModal: () => void;
}

/** @description 최대 입력 글자 수 */
const MAX_NUMBER = 800 as const;

const TeamDesc: FC<TeamDescProps> = ({ onMoveToHostPage, onOpenModal }) => {
	const dispatch = useDispatch();
	const { teamDesc, createTeamLoading, createTeamDone } = useSelector(
		(state: RootState) => state.host
	);

	const [value, onChange] = useInput(teamDesc);

	const onOpenCreateTeamModal = () => {
		dispatch(changeTeamDescAction(value));
		onOpenModal();
	};

	const textareaStyled: CSSProperties = useMemo(
		() => ({ paddingRight: '58px', lineHeight: '1.3' }),
		[]
	);

	useEffect(() => {
		if (createTeamDone) onMoveToHostPage('next')();
	}, [createTeamDone, onMoveToHostPage]);

	return (
		<>
			<Card
				title={
					<HostTitleWrapper>
						<Title size="h5">📙 팀의 설명을 입력해주세요!</Title>
						<Text color="guide" size="sm" weight="light">
							{`공백없이 최대 ${MAX_NUMBER}자 이내로 입력해주세요!`}
						</Text>
					</HostTitleWrapper>
				}
				fullSize
				px={20}
				py={20}
			>
				<Textarea
					rows={5}
					autoSize
					value={value}
					onChange={onChange}
					style={textareaStyled}
					placeholder="팀의 설명을 입력해주세요!"
					suffix={
						<Text
							size="xs"
							color={`${value.length > MAX_NUMBER ? 'error' : 'guide'}`}
						>{`${value.length}/${MAX_NUMBER}`}</Text>
					}
				/>
			</Card>
			<HostBtnGroup>
				<Button onClick={onMoveToHostPage('prev')} fullSize type="gray">
					전 단계로 돌아가기
				</Button>
				<Button
					onClick={onOpenCreateTeamModal}
					fullSize
					disabled={!value || value.length > MAX_NUMBER}
					loading={createTeamLoading}
				>
					다음 단계로 넘어가기
				</Button>
			</HostBtnGroup>
		</>
	);
};

export default TeamDesc;
