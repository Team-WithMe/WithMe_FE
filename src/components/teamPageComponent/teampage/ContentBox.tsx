import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Button } from '@with-me/ui';

const BoxWrapper = styled.div`
	width: 100%;
	padding: 10px;
	border: 10px;
	background-color: #fff;
	margin: 5px;
`;
const Title = styled.div`
	height: 30px;
	padding: 5px 10px 10px 10px;
	border-bottom: 1px solid #dcdcdc;
	justify-content: space-between;
	align-items: center;
	display: flex;
`;
const Content = styled.div`
	padding: 10px;
`;

interface ContentBoxProps {
	title: string;
	children: ReactNode;
	button?: boolean;
	buttonAction?: () => void;
}

const ContentBox: FC<ContentBoxProps> = ({ title, children, button, buttonAction }) => {
	return (
		<BoxWrapper>
			<Title>
				<div>{title}</div>
				{button && <Button onClick={buttonAction}>글쓰기</Button>}
			</Title>
			<Content>{children}</Content>
		</BoxWrapper>
	);
};

export default ContentBox;
