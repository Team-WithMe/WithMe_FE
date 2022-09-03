import React, { FC } from 'react';
import styled from '@emotion/styled';

const NoticeWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;

interface NoticeProps {
	title: string;
	date: string;
}

const Notice: FC<NoticeProps> = ({ title, date }) => {
	return (
		<NoticeWrapper>
			<div>{title}</div>
			<div>{date}</div>
		</NoticeWrapper>
	);
};

export default Notice;
