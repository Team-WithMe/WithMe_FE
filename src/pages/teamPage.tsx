import React, { FC } from 'react';
import styled from '@emotion/styled';
import TeamLayout from '@components/layouts/TeamLayout';

const TopContent = styled.div`
	display: flex;
`;
const Notice = styled.div`
	width: 460px;
	height: 300px;
	background-color: white;
	padding: 15px;
	border-radius: 5px;
	margin-right: 5px;
	position: relative;
`;
const NoticeList = styled.div`
	display: flex;
	flex-direction: column;
	.notice {
		color: '#dcdcdc';
		justify-content: space-between;
		padding: 10px;
	}
`;
const TeamMember = styled.div`
	width: 460px;
	height: 300px;
	padding: 15px;
	background-color: white;
	border-radius: 5px;
`;
const TeamMemberList = styled.div`
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;
const Member = styled.div`
	flex-basis: 33%;
`;
const Calinder = styled.div`
	width: 955px;
	height: 200px;
	padding: 15px;
	margin-top: 5px;
	background-color: white;
	border-radius: 5px;
`;
const ContentTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	border-bottom: 1px solid #ddd;
`;
const PagNation = styled.div`
	position: absolute;
	bottom: 0px;
`;

const TeamPage: FC = () => {
	return (
		<TeamLayout>
			<div>
				<TopContent>
					<Notice>
						<ContentTitle>공지사항</ContentTitle>
						<NoticeList>
							<div className="notice">글 목록</div>
							<div>글 목록</div>
							<div>글 목록</div>
							<div>글 목록</div>
						</NoticeList>
						<PagNation>페이지 네이션</PagNation>
					</Notice>

					<TeamMember>
						<ContentTitle>팀원 목록</ContentTitle>
						<TeamMemberList>
							<Member>글 목록</Member>
							<Member>글 목록</Member>
							<Member>글 목록</Member>
							<Member>글 목록</Member>
						</TeamMemberList>
					</TeamMember>
				</TopContent>

				<Calinder>
					<ContentTitle>팀 캘린더</ContentTitle>
					<div>글 목록</div>
				</Calinder>
			</div>
		</TeamLayout>
	);
};

export default TeamPage;
