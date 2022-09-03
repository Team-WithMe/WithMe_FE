import styled from '@emotion/styled';

export const NoticeModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	.input {
		width: 100%;
		font-size: 24px;
		padding: 5px;
		border: none;
		border-bottom: 1px solid #dcdcdc;
	}
	.input ::placeholder {
		color: #dcdcdc;
		opacity: 0.7;
	}
`;
