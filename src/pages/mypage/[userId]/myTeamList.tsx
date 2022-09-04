import { CSSProperties, useMemo } from 'react';
import Link from 'next/link';
import { Button, Text, Title } from '@with-me/ui';

import MyPageLayout from '@components/mypage/MyPageLayout';
import {
	MyPageContentGruop,
	MyPageContentItem,
	MyPageTitleWrapper,
	MyPageWrapper,
	MyTeamSkillList
} from '@components/mypage/mypage.styled';
import { SKILLS } from '@lib/constants/skills';
import type { SkillNameType } from '@typings/common';

const DUMMY_DATA = [
	{
		id: '1',
		teamName: '위드미 스터디 매칭 서비스 프로젝트',
		teamDescription: '위드미는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.',
		skills: ['react', 'nodejs', 'typescript']
	},
	{
		id: '2',
		teamName: '위드미 스터디 매칭 서비스 프로젝트',
		teamDescription: '위드미는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.',
		skills: ['react', 'nodejs', 'typescript']
	},
	{
		id: '2',
		teamName: '위드미 스터디 매칭 서비스 프로젝트',
		teamDescription: '위드미는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.',
		skills: ['react', 'nodejs', 'typescript']
	},
	{
		id: '2',
		teamName: '위드미 스터디 매칭 서비스 프로젝트',
		teamDescription: '위드미는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.',
		skills: ['react', 'nodejs', 'typescript']
	}
];

const MyTeam = () => {
	const buttonStyled: CSSProperties = useMemo(
		() => ({ position: 'absolute', top: '20px', right: '20px' }),
		[]
	);

	return (
		<MyPageLayout>
			<MyPageWrapper>
				<MyPageTitleWrapper>
					<Title size="h3" weight="regular">
						참여중인 팀
					</Title>
					<Text color="guide" weight="light">
						제봉님은 총 {DUMMY_DATA.length}개에 팀에 참여하고 있어요.
					</Text>
				</MyPageTitleWrapper>
				<MyPageContentGruop>
					{DUMMY_DATA.map(({ id, skills, teamDescription, teamName }) => (
						<MyPageContentItem key={id}>
							<Button style={buttonStyled} size="sm">
								<Link href="/">
									<a>팀 페이지 이동</a>
								</Link>
							</Button>
							<Title size="h5" weight="regular">
								{teamName}
							</Title>
							<Text size="sm" color="guide" weight="light">
								{teamDescription}
							</Text>
							<MyTeamSkillList>
								{(skills as SkillNameType[]).map(skill => {
									const item = SKILLS.find(element => element.name === skill);
									return item ? <item.Icon key={skill} width={30} height={30} /> : undefined;
								})}
							</MyTeamSkillList>
						</MyPageContentItem>
					))}
				</MyPageContentGruop>
			</MyPageWrapper>
		</MyPageLayout>
	);
};

export default MyTeam;
