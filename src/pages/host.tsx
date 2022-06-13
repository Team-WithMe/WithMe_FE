import HostLayout from '@components/layout/HostLayout';
import useModal from '@hooks/useModal';
import { FC } from 'react';

//* 모달 컴포넌트
const TestModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => (
	<div style={{ background: 'white', width: '568px', height: '400px', borderRadius: '10px', padding: '20px' }}>
		모달 내용... <br /> <button onClick={onCloseModal}>모달창 닫기</button>
	</div>
);

const HostPage = () => {
	//* useModal 사용
	//* ModalPortal: root-modal 이라는 id에 모달 랜더링 (children 으로 모달 컴포넌트 만들어서 넣어주면 됩니다.)
	//* onCloseModal: 모달창 오픈 이벤트
	//* onOpenModal: 모달창 닫는 이벤트
	const { ModalPortal, onCloseModal, onOpenModal } = useModal();

	return (
		<HostLayout>
			<button onClick={onOpenModal}>모달창 열기</button>
			<ModalPortal>
				<TestModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</HostLayout>
	);
};

export default HostPage;
