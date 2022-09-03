import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

const AllWrapper = styled.div`
	flex: 1;
`;
const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

interface TeamLayoutProps {
	children: ReactNode;
}

const TeamLayout: FC<TeamLayoutProps> = ({ children }) => {
	return (
		<AllWrapper>
			<Header />
			<ContentWrapper>{children}</ContentWrapper>
			<Footer />
		</AllWrapper>
	);
};

export default TeamLayout;
