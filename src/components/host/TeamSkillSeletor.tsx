import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Text, Title } from '@with-me/ui';

import { SKILLS } from '@lib/constants/skills';
import { RootState } from '@store/rootReducer';
import { changeTeamSkillAction } from '@store/host/host.slice';
import { colors } from '@styles/theme';
import type { SkillNameType } from '@typings/common';
import type { HostComponentProps } from '@typings/host';
import {
	HostBtnGroup,
	HostTitleSuffix,
	HostTitleWrapper,
	SkillCard,
	SkillList,
	SkillWrapper
} from './host.styled';

const SKILL_OFFSET = 0 as const;
const SKILL_LIMIT = 12 as const;

const TeamSkillSeletor: FC<HostComponentProps> = ({ onMoveToHostPage }) => {
	const dispatch = useDispatch();
	const { teamSkills } = useSelector((state: RootState) => state.host);

	const [startNum, setStartNum] = useState<number>(SKILL_OFFSET);
	const [endNum, setEndNum] = useState<number>(SKILL_LIMIT);
	const [skills, setSkills] = useState<typeof SKILLS>([]);
	const [selectSkillList, setSelectSkillList] = useState<SkillNameType[]>(teamSkills);
	const [prevBtnValid, setprevBtnValid] = useState(false);
	const [nextBtnValid, setNextBtnValid] = useState(false);
	const [isMaxSkillList, setIsMaxSkillList] = useState(false);

	useEffect(() => {
		setNextBtnValid(skills.length !== (SKILL_LIMIT as number));
		setprevBtnValid(startNum === 0);
		setSkills(SKILLS.slice(startNum, endNum));
	}, [endNum, skills.length, startNum]);

	useEffect(() => {
		if (selectSkillList.length === 8) setIsMaxSkillList(true);
		else setIsMaxSkillList(false);
	}, [selectSkillList.length]);

	const onMoveToPrevSkillPage = useCallback(() => {
		if (!prevBtnValid) {
			setStartNum(prev => prev - SKILL_LIMIT);
			setEndNum(prev => prev - SKILL_LIMIT);
		}
	}, [prevBtnValid]);

	const onMoveToNextSkillPage = useCallback(() => {
		if (!nextBtnValid) {
			setStartNum(prev => prev + SKILL_LIMIT);
			setEndNum(prev => prev + SKILL_LIMIT);
		}
	}, [nextBtnValid]);

	const onSelectedSkill = (skill: SkillNameType) => () => {
		if (selectSkillList.indexOf(skill) >= 0) {
			setIsMaxSkillList(false);
			setSelectSkillList(prev => prev.filter(v => v !== skill));
		} else {
			if (selectSkillList.length > 7) return;
			setSelectSkillList(prev => [...prev, skill]);
		}
	};

	const onClearSkill = () => setSelectSkillList([]);

	const onMoveToNextHostPage = () => {
		dispatch(changeTeamSkillAction(selectSkillList));
		onMoveToHostPage('next')();
	};

	return (
		<>
			<Card
				title={
					<HostTitleWrapper>
						<Title size="h5">📗 언어 / 라이브러리 를 선택해주세요!</Title>
						<Text color="guide" size="sm" weight="light">
							최대 8개까지 선택할 수 있어요!
						</Text>
						<HostTitleSuffix>
							<Button
								size="sm"
								type="error"
								onClick={onClearSkill}
								disabled={selectSkillList.length === 0}
							>
								초기화
							</Button>
							<Button size="sm" onClick={onMoveToPrevSkillPage} disabled={prevBtnValid}>
								이전
							</Button>
							<Button size="sm" onClick={onMoveToNextSkillPage} disabled={nextBtnValid}>
								다음
							</Button>
						</HostTitleSuffix>
					</HostTitleWrapper>
				}
				fullSize
				px={20}
				py={20}
			>
				<SkillList>
					{selectSkillList.length ? (
						selectSkillList.map(skill => (
							<Text key={skill} color={isMaxSkillList ? 'success' : 'defalut'}>
								{skill}
							</Text>
						))
					) : (
						<Text color="guide">기술스택을 선택해주세요!</Text>
					)}
				</SkillList>
				<SkillWrapper>
					{skills.map(({ Icon, id, name }) => (
						<SkillCard
							key={id}
							isHover
							onClick={onSelectedSkill(name)}
							borderColor={selectSkillList.indexOf(name) >= 0 ? colors.primary : undefined}
						>
							<Icon />
							{name}
						</SkillCard>
					))}
				</SkillWrapper>
			</Card>
			<HostBtnGroup>
				<Button onClick={onMoveToHostPage('prev')} fullSize type="gray">
					전 단계로 돌아가기
				</Button>
				<Button onClick={onMoveToNextHostPage} fullSize disabled={!selectSkillList.length}>
					다음 단계로 넘어가기
				</Button>
			</HostBtnGroup>
		</>
	);
};

export default TeamSkillSeletor;
