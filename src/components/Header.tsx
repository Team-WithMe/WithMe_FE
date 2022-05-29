import React from 'react';
import Logo from './common/Logo';
import { HeaderWrapper } from './Header.styled';
import Button from './common/Button';

const Header = () => {
	return (
		<HeaderWrapper>
			<Logo />
			<div className="header-title">
				<span>팀찾기</span>
				<span>커뮤니티</span>
			</div>
			<div className="button-wrapper">
				<Button color="white">로그인 | 로그아웃</Button>
			</div>
		</HeaderWrapper>
	);
};

export default Header;
