import React, { FC } from 'react';
import styled from '@emotion/styled';
import Notice from './Notice';

const NoticeListWrapper = styled.div`
	flex-direction: row;
`;

interface NoticeListProps {
	NoticeClickEvent: () => void;
}

const NoticeList: FC<NoticeListProps> = ({ NoticeClickEvent }) => {
	const fuckingDummyData = [
		{ title: '공지사항입니다.', date: '2022.04.12' },
		{ title: '공지사항입니다.', date: '2022.04.12' },
		{ title: '공지사항입니다.', date: '2022.04.12' },
		{ title: '공지사항입니다.', date: '2022.04.12' },
		{ title: '공지사항입니다.', date: '2022.04.12' },
		{ title: '공지사항입니다.', date: '2022.04.12' }
	];

	return (
		<NoticeListWrapper>
			{fuckingDummyData.map((value, index) => (
				<Notice
					title={value.title}
					date={value.date}
					key={index}
					NoticeClickEvent={NoticeClickEvent}
				/>
			))}
		</NoticeListWrapper>
	);
};

export default NoticeList;
