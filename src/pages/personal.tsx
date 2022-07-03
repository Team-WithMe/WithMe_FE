import Header from '@components/common/Header';
import React, { FC } from 'react';
import styled from '@emotion/styled';

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
	border: 1px solid #d2d2d2;
`;
const Profile = styled.div``;
const ProfileButtonWrapper = styled.div`
	display: flex;
`;
const RightBottomButtonWrapper = styled.div`
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
				<div style={{ textAlign: 'left' }}>title</div>
				<RightAndLeft>
					<Right>
						<Profile>
							<div>
								<div>image</div>
							</div>
							<div>
								<div>닉네임</div>
								<div>
									<input />
								</div>
							</div>
							<ProfileButtonWrapper>
								<button>1</button>
								<button>2</button>
							</ProfileButtonWrapper>
						</Profile>
						<RightBottomButtonWrapper>
							<button>123</button>
							<button>123</button>
							<button>123</button>
						</RightBottomButtonWrapper>
					</Right>
					<Left>
						<div>
							<div>참여중인 팀</div>
							<div style={{ display: 'flex' }}>
								<div>
									<div>dlcm tmxjel aocld djWjrnwjWjrn</div>
									<div>dlcm tmxjel aocld djWjrnwjWjrn</div>
								</div>
								<div>
									<button>go teamPage</button>
								</div>
							</div>
							<div style={{ display: 'flex' }}>
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
		</>
	);
};

export default PersonnalPage;
