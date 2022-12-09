import styled from '@emotion/styled';
import { Button, Card } from '@with-me/ui';

//* layout styled
export const MyPageLayoutContainer = styled.div`
	padding: 80px 0 200px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const MyPageLayoutWrapper = styled.div`
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

//* pages styled
export const MyPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const MyPageTitleWrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: flex-end;
`;

export const MyPageContentGruop = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const MyPageContentItem = styled(Card)`
	position: relative;

	> div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
`;

export const MyTeamSkillList = styled.div`
	padding-top: 10px;
	display: flex;
	align-items: center;
	gap: 15px;
`;
