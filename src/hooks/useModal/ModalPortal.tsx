import { FC, ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '..';
import * as S from './ModalPortal.styled';

interface ModalPortalProps {
	children: ReactNode;
	isShow?: boolean;
	modalOpened?: boolean;
	onCloseModal?: () => void;
}

const ModalPortal: FC<ModalPortalProps> = ({ children, isShow, modalOpened, onCloseModal }) => {
	const [mounted, setMounted] = useState(false);
	const ref = useRef<Element | null>(null);

	const isomorphicEffect = useIsomorphicEffect();

	isomorphicEffect(() => {
		setMounted(true);
		if (document) {
			const dom = document.querySelector('#root-modal');
			ref.current = dom;
		}
	}, []);

	if (ref.current && mounted && modalOpened) {
		return createPortal(
			<S.Container>
				<S.BackDrop role="presentation" onClick={onCloseModal} isShow={isShow} />
				<S.Content isShow={isShow as boolean}>{children}</S.Content>
			</S.Container>,
			ref.current
		);
	}
	return null;
};

export default ModalPortal;
