import { CSSProperties, FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Close } from '@with-me/icons';
import { Button, Card, Text, Title } from '@with-me/ui';

import { SKILLS } from '@lib/constants/skills';
import { RootState } from '@store/rootReducer';
import type { ModalProps } from '@typings/common';
import {
	CreateTeamButtonGroup,
	CreateTeamCardWrapper,
	CreateTeamSkillList,
	CreateTeamTitleWrapper
} from './CreateTeamModal.styled';

interface CreateTeamModalProps extends ModalProps {
	onCreateTeam: () => void;
}

const CreateTeamModal: FC<CreateTeamModalProps> = ({ onCloseModal, onCreateTeam: onCreate }) => {
	const { teamGoal, teamSkills, teamName, teamDesc } = useSelector(
		(state: RootState) => state.host
	);

	const onCreateTeam = () => {
		onCreate();
		onCloseModal();
	};

	const textStyled: CSSProperties = useMemo(() => ({ lineHeight: '1.5' }), []);

	return (
		<Card
			title={
				<CreateTeamTitleWrapper>
					<Title size="h4" weight="regular">
						{teamName}팀 생성하기
					</Title>
					<Close width={30} height={30} onClick={onCloseModal} />
				</CreateTeamTitleWrapper>
			}
		>
			<CreateTeamCardWrapper>
				<Text size="xl" style={textStyled}>
					팀 목적
					<br />
					{teamGoal === 'project' ? '팀 프로젝트' : '스터디'}
				</Text>
				<div>
					<Text size="xl" style={textStyled}>
						기술 스택
					</Text>
					<CreateTeamSkillList>
						{teamSkills.map(skill =>
							SKILLS.map(({ Icon, name }) => name === skill && <Icon width={30} height={30} />)
						)}
					</CreateTeamSkillList>
				</div>
				<Text size="xl" style={textStyled}>
					팀 설명
					<br />
					{teamDesc}
				</Text>
				<Text color="description">해당 정보가 맞는지 한번 더 확인해주세요!</Text>
			</CreateTeamCardWrapper>
			<CreateTeamButtonGroup>
				<Button fullSize type="gray" onClick={onCloseModal}>
					취소
				</Button>
				<Button fullSize onClick={onCreateTeam}>
					팀 생성하기
				</Button>
			</CreateTeamButtonGroup>
		</Card>
	);
};

export default CreateTeamModal;
