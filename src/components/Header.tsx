import React from 'react';
import Logo from './common/Logo';
import { HeaderWrapper } from './Header.styled';

const Header = () => {
	return (
		<HeaderWrapper>
			<Logo />
			<div className="header-title">팀찾기 프로젝트</div>
			<div className="button-wrapper">
				<button>로그인 |</button>
				<button>로그아웃</button>
			</div>
		</HeaderWrapper>
	);
};

export default Header;
