import { CSSProperties, FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text, Textarea } from '@with-me/ui';

import useInput from '@hooks/useInput';
import type { RootState } from '@store/rootReducer';
import { changeTeamDescAction } from '@store/host/host.slice';
import type { HostComponentProps } from '@src/types/host';
import HostCardWrapper from './HostCardWrapper';
import * as S from './TeamDesc.styled';

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
			<HostCardWrapper
				title="📙 팀의 설명을 입력해주세요!"
				description={`공백없이 최대 ${MAX_NUMBER}자 이내로 입력해주세요!`}
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
			</HostCardWrapper>
			<S.ButtonWrapper>
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
			</S.ButtonWrapper>
		</>
	);
};

export default TeamDesc;
