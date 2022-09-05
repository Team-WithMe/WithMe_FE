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
	align-items: center;

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.75);
		animation-name: modal-bg-animation;
		animation-duration: 150ms;

		@keyframes modal-bg-animation {
			0% {
				background-color: rgba(0, 0, 0, 0.25);
			}

			100% {
				background-color: rgba(0, 0, 0, 0.75);
			}
		}
	}

	.content {
		position: absolute;
		z-index: 11;
		animation-name: modal-animation;
		animation-duration: 150ms;

		@media ${({ theme }) => theme.device.tabletL} {
			margin-top: 80px;
		}

		@keyframes modal-animation {
			0% {
				transform: scale(0.95);
			}

			100% {
				transform: scale(1);
			}
		}
	}
`;

const useModal = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const onModalEvent = useCallback((open: boolean) => () => setModalOpened(open), []);

	const ModalPortal: FC<{ children: ReactNode }> = ({ children }) => {
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
