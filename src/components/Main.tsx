import React, { FC } from 'react';
import { HomeWrapper } from '@components/Home.styled';
import Button from './common/Button';
import MainInfo from './MainInfo';
import Footer from './common/Footer';
import useModal from '@hooks/useModal';
import Logo from './common/Logo';
import { CloseIcon } from '@assets/svg/common';
import { ModalContainer } from './Modal.styled';

const ServiceModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	return (
		<ModalContainer>
			<div className="modal-logo">
				<Logo />
				<CloseIcon className="close-btn" onClick={onCloseModal} />
			</div>
			<div className="modal-title">위드미에서 같이 성장할 팀을 구해보세요!</div>
			<div className="modal-sub-title">서비스를 이용하기 위해 스터디장 또는 스터디원을 선택해 주세요!</div>
			<div className="modal-content">
				<div className="modal-group">
					<img src="/img/select_img_1.png" />
					<div>스터디장이신가요?</div>
					<span>팀페이지를 만들 수 있어요!</span>
					<Button>스터디장으로 진행하기</Button>
				</div>
				<div className="modal-party-member">
					<img src="/img/select_img_2.png" />
					<div>스터디원이신가요?</div>
					<span>모집중인 팀 페이지에서 팀을 찾아보세요!</span>
					<Button>스터디원으로 참여하기</Button>
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
					<span className="home-title-span">스터디</span>와 <span className="home-title-span">프로젝트 팀을</span> 구할
					수 있는
					<br />
					<span className="home-title-span">
						온라인 스터디 매칭 플랫폼 <span className="sub-title-span">With Me</span>
					</span>
					<div className="home-sub-title">
						<span className="sub-title-span">위드미</span>로 함께 할 팀원을 찾아보세요!
					</div>
					<div className="button-wrapper">
						<Button color="white" onClick={onOpenModal}>
							서비스 시작하기 ▶
						</Button>
					</div>
				</div>
				<div className="intro-image">
					<img src="/img/main_intro.png" alt="main_intro" />
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
