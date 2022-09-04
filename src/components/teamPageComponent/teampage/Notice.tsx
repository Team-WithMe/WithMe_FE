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
	NoticeClickEvent: () => void;
}

const Notice: FC<NoticeProps> = ({ title, date, NoticeClickEvent }) => {
	return (
		<NoticeWrapper onClick={NoticeClickEvent}>
			<div>{title}</div>
			<div>{date}</div>
		</NoticeWrapper>
	);
};

export default Notice;
