import React from 'react';
import styled from '@emotion/styled';
import { HomeWrapper } from '@components/Home.styled';
import { MainWrapper } from './Main.styled';
import { CloseIcon, LikeIcon, LogoIcon, MemberIcon, MembersIcon, StartArrowIcon } from '@assets/svg/common';
import Button from './common/Button';
import MainInfo from './MainInfo';
import Footer from './Footer';

const Main = () => {
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
						<Button color="white">서비스 시작하기 ▶</Button>
					</div>
				</div>
				<div className="intro-image">
					<img src="/img/main_intro.png" alt="main_intro" />
				</div>
			</HomeWrapper>
			<MainInfo />
			<Footer />
		</>
	);
};

export default Main;
