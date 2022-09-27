import { FC } from 'react';
import { Text, Title } from '@with-me/ui';

import type { ModalProps } from '../../types';
import * as S from './CommonModal.styled';

interface CommonModalProps extends ModalProps {
	checkButton?: string;
	closeButton?: string;
	description?: string;
	onClickCheck?: () => void;
	title?: string;
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
		<S.CloseIcon onClick={onCloseModal} />
		<S.Wrapper>
			<Title size="h5">{title}</Title>
			<Text size="sm" color="description">
				{description}
			</Text>
		</S.Wrapper>
		<S.ButtonGruop>
			{closeButton && (
				<S.Button onClick={onCloseModal} type="gray">
					{closeButton}
				</S.Button>
			)}
			{checkButton && <S.Button onClick={onClickCheck}>{checkButton}</S.Button>}
		</S.ButtonGruop>
	</S.Container>
);

export default CommonModal;
