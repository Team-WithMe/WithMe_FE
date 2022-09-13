import styled from '@emotion/styled';

const TitleWrapper = styled.div`
	width: 812px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	> svg {
		cursor: pointer;
	}
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const SkillList = styled.div`
	padding-top: 8px;
	display: flex;
	align-items: center;
	gap: 12px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding-top: 20px;
`;

export default {
	TitleWrapper,
	CardWrapper,
	SkillList,
	ButtonWrapper
};
