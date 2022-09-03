import { Close } from '@with-me/icons';
import { Card, Input } from '@with-me/ui';
import React, { FC, useState } from 'react';
import { NoticeModalWrapper } from './NoticeModal.styled';
interface NoticeWriteModalProps {
	onCloseModal: () => void;
}

const NoticeWriteModal: FC<NoticeWriteModalProps> = ({ onCloseModal }) => {
	const [noticeTitle, setNoticeTitle] = useState('');
	const [noticeContent, setNoticeContent] = useState('');

	return (
		<Card>
			<NoticeModalWrapper>
				<Close onClick={onCloseModal} />
				<input className="input" placeholder="제목을 입력해주세요" />
				<input className="input" placeholder="내용을 입력해주세요" />
			</NoticeModalWrapper>
		</Card>
	);
};

export default NoticeWriteModal;
