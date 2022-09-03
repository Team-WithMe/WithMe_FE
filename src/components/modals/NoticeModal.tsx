import { Close } from '@with-me/icons';
import { Card, Textarea, Title } from '@with-me/ui';
import React, { FC } from 'react';
import { NoticeModalWrapper } from './NoticeModal.styled';
interface NoticeModalProps {
	onCloseModal: () => void;
}

const NoticeModal: FC<NoticeModalProps> = ({ onCloseModal }) => {
	return (
		<Card>
			<NoticeModalWrapper>
				<Close onClick={onCloseModal} />
				<Title>Title.</Title>
				<Textarea />
			</NoticeModalWrapper>
		</Card>
	);
};

export default NoticeModal;
