import styled from '@emotion/styled';

//* layout styled
export const MyPageContainer = styled.div`
	padding: 80px 0 200px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const MyPageWrapper = styled.div`
	display: flex;
	gap: 16px;
	width: 100%;

	.layout {
		&__info {
			display: flex;
			flex-direction: column;
			gap: 16px;
			width: 30%;
		}

		&__content {
			width: 70%;
		}
	}
`;

//* profile card styled
export const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;

	.profile {
		&__wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}

		&__text-group {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			gap: 8px;
		}
	}
`;

export const ProfileBtnGroup = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
`;
