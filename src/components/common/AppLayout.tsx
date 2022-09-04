import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

const AllWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const ContentWrapper = styled.div`
	width: 90%;
	max-width: 1364px;
	margin: 0 auto;
	flex: 1;
`;

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<AllWrapper>
			<Header />
			<ContentWrapper>{children}</ContentWrapper>
			<Footer />
		</AllWrapper>
	);
};

export default AppLayout;
