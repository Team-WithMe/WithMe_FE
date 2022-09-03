import { FC, ReactNode } from 'react';

import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

const AllWrapper = styled.div`
	flex: 1;
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
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
