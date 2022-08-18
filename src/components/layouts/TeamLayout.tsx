import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

const AllWrapper = styled.div``;
const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
`;
const Menu = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;
const MenuItem = styled.div`
	width: 130px;
	height: 30px;
	background-color: white;
	border-radius: 5px;
	border: 1px solid #dddddd;
	display: flex;
	align-items: center;
	padding: 5px;
	margin-bottom: 5px;
`;
const Content = styled.div``;

interface TeamLayoutProps {
	children: ReactNode;
}

const TeamLayout: FC<TeamLayoutProps> = ({ children }) => {
	return (
		<AllWrapper>
			<Header />
			<ContentWrapper>
				<Menu>
					<MenuItem>팀 페이지</MenuItem>
					<MenuItem>팀 메모장</MenuItem>
					<MenuItem>팀 채팅</MenuItem>
				</Menu>
				<Content>{children}</Content>
			</ContentWrapper>
			<Footer />
		</AllWrapper>
	);
};

export default TeamLayout;
