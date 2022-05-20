import styled from '@emotion/styled';

import Test from '@components/Test';

import { CloseIcon, LikeIcon, LogoIcon, MemberIcon, MembersIcon, StartArrowIcon } from '@assets/svg/common';

const TestStyled = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #eee;

	.icons {
		display: flex;
	}
`;

const Home = () => {
	return (
		<TestStyled>
			<h1>Custom Next template</h1>
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

export default Home;
