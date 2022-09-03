import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const BoxWrapper = styled.div`
	padding: 10px;
	background-color: '#fff';
`;

const Title = styled.div`
	padding: 10px;
	border-bottom: solid 1px #dcdcdc;
`;
const Content = styled.div`
	padding: 10px;
`;
interface ContentBoxProps {
	title: string;
	children: ReactNode;
}

const ContentBox: FC<ContentBoxProps> = ({ title, children }) => {
	return (
		<BoxWrapper>
			<Title>{title}</Title>
			<Content>{children}</Content>
		</BoxWrapper>
	);
};

export default ContentBox;
