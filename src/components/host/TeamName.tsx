import { ChangeEvent, CSSProperties, FC, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Input, Title } from '@with-me/ui';

import useInput from '@hooks/useInput';
import { RootState } from '@store/rootReducer';
import { changeTeamNameAction } from '@store/host/host.slice';
import { ValueClearButton } from '@styles/common.styled';
import type { HostComponentProps } from '@typings/host';
import { HostBtnGroup, HostTitleWrapper } from './host.styled';

const TeamName: FC<HostComponentProps> = ({ onMoveToHostPage }) => {
	const dispatch = useDispatch();
	const { teamName } = useSelector((state: RootState) => state.host);

	const inputRef = useRef<HTMLInputElement>(null);
	const [value, onChange, setValue] = useInput(teamName);
	const [teamNameValid, setTeamNameValid] = useState(false);

	const onClearValue = () => {
		inputRef.current?.focus();
		setValue('');
	};

	const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setTeamNameValid(false);
		onChange(event);
	};

	const onMoveToNextHostPage = () => {
		if (!value) {
			inputRef.current?.focus();
			setTeamNameValid(true);
		} else {
			dispatch(changeTeamNameAction(value));
			onMoveToHostPage('next')();
		}
	};

	const inputStyled: CSSProperties = useMemo(() => ({ marginBottom: '10px' }), []);

	return (
		<>
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
				<Input
					ref={inputRef}
					placeholder="팀 이름을 입력해주세요!"
					value={value}
					onChange={onChangeValue}
					error={teamNameValid}
					errorMsg="팀 이름은 필수입니다!"
					style={inputStyled}
					suffix={<ValueClearButton onClick={onClearValue} />}
				/>
			</Card>
			<HostBtnGroup>
				<Button onClick={onMoveToHostPage('prev')} fullSize type="gray">
					전 단계로 돌아가기
				</Button>
				<Button onClick={onMoveToNextHostPage} fullSize>
					다음 단계로 넘어가기
				</Button>
			</HostBtnGroup>
		</>
	);
};

export default TeamName;
