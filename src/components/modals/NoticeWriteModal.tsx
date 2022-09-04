import { Close } from '@with-me/icons';
import { Button, Card, Input } from '@with-me/ui';
import React, { FC, useCallback, useState } from 'react';
import { NoticeModalWrapper, ButtonWrapper } from './NoticeModal.styled';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { noticeRegistrationAction } from '@store/teampage/team.notice.action';

interface NoticeWriteModalProps {
	onCloseModal: () => void;
}

const NoticeWriteModal: FC<NoticeWriteModalProps> = ({ onCloseModal }) => {
	const dispatch = useDispatch();
	const [noticeTitle, setNoticeTitle] = useState('');
	const [noticeContent, setNoticeContent] = useState('');
	const { pathname } = useRouter();
	const current_page_name: string = pathname.split('/')[3];
	console.log('[teamid]', pathname.split('/'));

	const noticeRegistion = useCallback(() => {
		const data = {
			title: noticeTitle,
			content: noticeContent,
			teamId: current_page_name
		};
		dispatch(noticeRegistrationAction(data));
	}, [dispatch, noticeTitle, noticeContent, current_page_name]);
	return (
		<Card>
			<NoticeModalWrapper>
				<Close onClick={onCloseModal} />
				<input
					className="inputTitle"
					placeholder="제목을 입력해주세요"
					onChange={e => setNoticeTitle(e.target.value)}
				/>
				<input
					className="inputContent"
					placeholder="내용을 입력해주세요"
					onChange={e => setNoticeContent(e.target.value)}
				/>
			</NoticeModalWrapper>
			<ButtonWrapper>
				<Button onClick={noticeRegistion}>등록</Button>
				<Button type="error" onClick={onCloseModal}>
					취소
				</Button>
			</ButtonWrapper>
		</Card>
	);
};

export default NoticeWriteModal;
