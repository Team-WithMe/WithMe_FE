import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
	display: flex;
	justify-content: center;

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.content {
		position: absolute;
		z-index: 11;
		margin-top: 150px;

		@media ${({ theme }) => theme.device.tabletL} {
			margin-top: 80px;
		}
	}
`;

const useModal = () => {
	const [modalOpened, setModalOpened] = useState(false);

	const onModalEvent = useCallback((open: boolean) => () => setModalOpened(open), []);

	interface Props {
		children: ReactNode;
	}

	const ModalPortal: FC<Props> = ({ children }) => {
		const ref = useRef<Element | null>(null);
		const [mounted, setMounted] = useState(false);

		useEffect(() => {
			setMounted(true); //* mount!
			if (document) {
				const dom = document.querySelector('#root-modal');
				ref.current = dom;
			}
		}, []);

		if (ref.current && mounted && modalOpened) {
			return createPortal(
				<Container>
					<div className="background" role="presentation" onClick={onModalEvent(false)} />
					<div className="content">{children}</div>
				</Container>,
				ref.current
			);
		}
		return null;
	};

	return {
		onOpenModal: onModalEvent(true),
		onCloseModal: onModalEvent(false),
		ModalPortal
	};
};

export default useModal;
