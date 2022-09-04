import styled from '@emotion/styled';

export const NoticeModalWrapper = styled.div`
	width: 700px;
	height: 400px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	position: relative;

	> svg {
		position: absolute;
		top: 5px;
		right: 5px;
		cursor: pointer;
	}
	.inputContent,
	.inputTitle {
		width: 100%;
		font-size: 24px;
		padding: 5px;
		border: none;
		border-bottom: 2px solid #dcdcdc;
	}
	.inputContent {
		border: none;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;
