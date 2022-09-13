import styled from '@emotion/styled';

const TitleWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 5px;
	position: relative;
	height: auto;
`;

const TitleSuffix = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	gap: 3px;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	margin-bottom: 100px;
`;

export default { TitleWrapper, TitleSuffix };
