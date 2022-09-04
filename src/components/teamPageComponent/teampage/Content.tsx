import React, { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import AppLayout from '@components/common/AppLayout';
import ContentBox from '@components/teamPageComponent/teampage/ContentBox';
import NoticeList from '@components/teamPageComponent/teampage/NoticeList';
import TeamMemberList from '@components/teamPageComponent/teampage/TeamMemberList';
import Navbar from '@components/common/Navbar';
import { useRouter } from 'next/router';
import useModal from '@hooks/useModal';
import NoticeWriteModal from '@components/modals/NoticeWriteModal';
import NoticeModal from '@components/modals/NoticeModal';
import type { NavItemType } from '@typings/common.d';
import { TEAM_PAGE_NAV_ITEMS } from '@lib/constants/teampage';

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
const RightContent = styled.div`
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
const Content: FC = () => {
	const { pathname } = useRouter();
	const current_page_name = pathname.split('/')[3];
	const ITEMS: NavItemType[] = useMemo(
		() =>
			TEAM_PAGE_NAV_ITEMS.map(({ key, label, pageName }) => ({
				active: current_page_name === pageName,
				key,
				label,
				toPage: `/teampage/${'123'}/${pageName}` //Todo api 나오면 user Id 변경
			})),
		[current_page_name]
	);

	const {
		ModalPortal: NoticeWriteModalPortal,
		onCloseModal: closeNoticeWriteModal,
		onOpenModal: openNoticeWriteModal
	} = useModal();

	const {
		ModalPortal: NoticeModalPortal,
		onCloseModal: closeNoticeModal,
		onOpenModal: openNoticeModal
	} = useModal();

	return (
		<AppLayout>
			<Wrapper>
				<BigTitle>이츠 스터디 매칭 서비스 프로젝트</BigTitle>
				<SmallTitle>이츠는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.</SmallTitle>
				<ContentWrapper>
					<RightContent>
						<Navbar items={ITEMS} />
					</RightContent>
					<LeftContent>
						<LeftTop>
							<ContentBox title={'공지사항'} button={true} buttonAction={openNoticeWriteModal}>
								<NoticeList NoticeClickEvent={openNoticeModal} />
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
			<NoticeWriteModalPortal>
				<NoticeWriteModal onCloseModal={closeNoticeWriteModal} />
			</NoticeWriteModalPortal>
			<NoticeModalPortal>
				<NoticeModal onCloseModal={closeNoticeModal} />
			</NoticeModalPortal>
		</AppLayout>
	);
};

export default Content;
