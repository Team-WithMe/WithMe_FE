import styled from '@emotion/styled';
import Link from 'next/link';

import { CloseIcon, LikeIcon, LogoIcon, MemberIcon, MembersIcon, StartArrowIcon } from '@assets/svg/common';
import Test from '@components/Test';

const TestStyled = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #eee;

	.icons {
		display: flex;
	}
`;

const HomePage = () => {
	return (
		<TestStyled>
			<Link href="/test">
				<a style={{ fontSize: '20px' }}>TestPage 이동</a>
			</Link>
			<Test />
			<div className="icons">
				<CloseIcon />
				<LikeIcon />
				<LogoIcon />
				<MemberIcon />
				<MembersIcon />
				<StartArrowIcon />
			</div>
			<img src="/img/main_intro.png" alt="main_intro" />
		</TestStyled>
	);
};

export default HomePage;
