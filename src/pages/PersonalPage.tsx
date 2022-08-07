import Header from '@components/common/Header';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import Footer from '@components/common/Footer';
import { ProfileNoImg } from '@assets/svg/common';
import MenuButton from '@components/PersonalPage/MenuBotton';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const RightAndLeft = styled.div`
	display: flex;
`;
const Right = styled.div`
	width: 360px;
	height: 480px;
`;
const Profile = styled.div`
	height: 390px;
	border: 1px solid #d2d2d2;
`;
const ProfileButtonWrapper = styled.div`
	display: flex;
`;
const MenuButtonWrapper = styled.div`
	width: 360px;
	display: flex;
	flex-direction: column;
`;

const Left = styled.div`
	width: 720px;
	border: 1px solid #d2d2d2;
`;

const PersonnalPage: FC = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<div>title</div>
				<RightAndLeft>
					<Right>
						<Profile>
							<div>
								<ProfileNoImg />
							</div>
							<div>
								<div>닉네임</div>
								<div>
									<input />
								</div>
								<div>
									<button>1</button>
									<button>2</button>
								</div>
							</div>
							<ProfileButtonWrapper>
								<button>1</button>
								<button>2</button>
							</ProfileButtonWrapper>
						</Profile>
						<MenuButtonWrapper>
							<MenuButton>내팀</MenuButton>
							<MenuButton>내 작성글</MenuButton>
							<MenuButton>좋아요한 팀</MenuButton>
						</MenuButtonWrapper>
					</Right>
					<Left>
						<div>
							<div>참여중인 팀</div>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<div>dlcm tmxjel aocld djWjrnwjWjrn</div>
									<div>dlcm tmxjel aocld djWjrnwjWjrn</div>
								</div>
								<div>
									<button>go teamPage</button>
								</div>
							</div>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<div>dlcm tmxjel aocld djWjrnwjWjrn</div>
									<div>dlcm tmxjel aocld djWjrnwjWjrn</div>
								</div>
								<div>
									<button>go teamPage</button>
								</div>
							</div>
						</div>
					</Left>
				</RightAndLeft>
			</ContentWrapper>
			<Footer />
		</>
	);
};

export default PersonnalPage;
