import { useCallback, useRef, useState } from 'react';
import { ANIMATION_TIME } from '@lib/constants';
import ModalPortal from './ModalPortal';

const useModal = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const timer = useRef<NodeJS.Timeout | null>(null);

	const onOpenModal = useCallback(() => {
		setIsShow(true);
		setModalOpened(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsShow(false);
		timer.current = setTimeout(() => setModalOpened(false), ANIMATION_TIME);
	}, []);

	ModalPortal.defaultProps = {
		isShow,
		modalOpened,
		onCloseModal
	};

	return { onOpenModal, onCloseModal, ModalPortal };
};

export default useModal;
