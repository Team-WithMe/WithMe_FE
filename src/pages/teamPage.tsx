import React, { FC } from 'react';
import styled from '@emotion/styled';
import TeamLayout from '@components/layouts/TeamLayout';
import ContentBox from '@components/teamPageComponent/ContentBox';
import NoticeList from '@components/teamPageComponent/NoticeList';
import TeamMemberList from '@components/teamPageComponent/TeamMemberList';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	justify-content: center;
`;
const ContentWrapper = styled.div`
	display: flex;
`;
const BigTitle = styled.div`
	font-size: x-large;
	margin-bottom: 10px;
`;
const SmallTitle = styled.div`
	font-size: large;
	margin-bottom: 20px;
`;
const RighttContent = styled.div`
	width: 20%;
	flex-direction: row;
`;
const LeftContent = styled.div`
	width: 80%;
	flex-direction: row;
`;
const LeftTop = styled.div`
	display: flex;
`;
const LeftBottom = styled.div`
	display: flex;
`;
const TeamPage: FC = () => {
	return (
		<TeamLayout>
			<Wrapper>
				<BigTitle>이츠 스터디 매칭 서비스 프로젝트</BigTitle>
				<SmallTitle>이츠는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.</SmallTitle>
				<ContentWrapper>
					<RighttContent></RighttContent>
					<LeftContent>
						<LeftTop>
							<ContentBox title={'공지사항'} button={true}>
								<NoticeList />
							</ContentBox>
							<ContentBox title={'팀원목록'}>
								<TeamMemberList />
							</ContentBox>
						</LeftTop>
						<LeftBottom>
							<ContentBox title={'팀 캘린더'}>
								<div>안녕하세요?</div>
							</ContentBox>
						</LeftBottom>
					</LeftContent>
				</ContentWrapper>
			</Wrapper>
		</TeamLayout>
	);
};

export default TeamPage;
