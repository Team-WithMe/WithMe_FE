import { FC, ReactNode } from 'react';
import { Title } from '@with-me/ui';
import type { ModalProps } from '../../src/types';
import * as S from './CommonModal.styled';

interface CommonModalProps extends ModalProps {
	children?: ReactNode;
	checkButton?: string;
	closeButton?: string;
	description?: string;
	onClickCheck?: () => void;
	title?: string;
}

const CommonModal: FC<CommonModalProps> = ({
	onCloseModal,
	children,
	checkButton,
	closeButton,
	onClickCheck,
	title
}) => (
	<S.Container>
		<S.CloseIcon onClick={onCloseModal} />
		<S.Wrapper>
			<Title size="h5">{title}</Title>
			{children}
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
