import { FC } from 'react';
import { Button } from '@with-me/ui';

import { HomeWrapper } from '@components/Home.styled';
import useModal from '@hooks/useModal';
import useRouterPush from '@hooks/useRouterPush';
import * as URI from '@lib/constants/image.url';
import Footer from './common/Footer';
import Logo from './common/Logo';
import MainInfo from './MainInfo';
import { ModalContainer } from './Modal.styled';
import { Close } from '@with-me/icons';
import Image from 'next/image';

const ServiceModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	const { onMoveToPage } = useRouterPush();

	return (
		<ModalContainer>
			<div className="modal-logo">
				<Logo />
				<Close className="close-btn" onClick={onCloseModal} />
			</div>
			<div className="modal-title">위드미에서 같이 성장할 팀을 구해보세요!</div>
			<div className="modal-sub-title">
				서비스를 이용하기 위해 스터디장 또는 스터디원을 선택해 주세요!
			</div>
			<div className="modal-content">
				<div className="modal-group">
					<Image src={URI.SELECT_HOST_IMG_URI} width={80} height={80} alt="select_host" />
					<div>스터디장이신가요?</div>
					<span>팀페이지를 만들 수 있어요!</span>
					<Button onClick={onMoveToPage('host')}>스터디장으로 진행하기</Button>
				</div>
				<div className="modal-party-member">
					<Image src={URI.SELECT_MEMBER_IMG_URI} width={80} height={80} alt="select_member" />
					<div>스터디원이신가요?</div>
					<span>모집중인 팀 페이지에서 팀을 찾아보세요!</span>
					<Button onClick={onMoveToPage('team')}>스터디원으로 참여하기</Button>
				</div>
			</div>
		</ModalContainer>
	);
};

const Main = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal();

	return (
		<>
			<HomeWrapper>
				<div className="home-title">
					<div>쉽고 간편하게</div>
					<span className="home-title-span">스터디</span>와
					<span className="home-title-span">프로젝트 팀을</span> 구할 수 있는
					<br />
					<span className="home-title-span">
						온라인 스터디 매칭 플랫폼 <span className="sub-title-span">With Me</span>
					</span>
					<div className="home-sub-title">
						<span className="sub-title-span">위드미</span>로 함께 할 팀원을 찾아보세요!
					</div>
					<Button onClick={onOpenModal}>서비스 시작하기</Button>
				</div>
				<div className="intro-image">
					<Image src={URI.MAIN_INTRO_IMG_URI} width={400} height={270} alt="main_intro" />
				</div>
			</HomeWrapper>
			<MainInfo />
			<Footer />
			<ModalPortal>
				<ServiceModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	);
};

export default Main;
