import { FC } from 'react';
import { Button, Text, Title } from '@with-me/ui';

import ModalCloseIcon from '@components/common/ModalCloseIcon';
import type { ModalProps } from '@typings/common';
import * as S from './CommonModal.styled';

interface CommonModalProps extends ModalProps {
	title?: string;
	description?: string;
	closeButton?: string;
	checkButton?: string;
	onClickCheck?: () => void;
}

const CommonModal: FC<CommonModalProps> = ({
	onCloseModal,
	checkButton,
	closeButton,
	description,
	onClickCheck,
	title
}) => (
	<S.Container>
		<ModalCloseIcon onClick={onCloseModal} />
		<S.Wrapper>
			<Title size="h5">{title}</Title>
			<Text size="sm" color="description">
				{description}
			</Text>
		</S.Wrapper>
		<S.ButtonGruop>
			{closeButton && (
				<Button onClick={onCloseModal} type="gray">
					{closeButton}
				</Button>
			)}
			{checkButton && <Button onClick={onClickCheck}>{checkButton}</Button>}
		</S.ButtonGruop>
	</S.Container>
);

export default CommonModal;
