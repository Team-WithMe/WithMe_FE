import styled from '@emotion/styled';
import { TestType } from '@typings/test';

const test: TestType = 'test';

const TextStyled = styled.div`
	color: ${({ theme }) => theme.colors.danger};
`;

const HostPage = () => {
	return <TextStyled>{test}</TextStyled>;
};

export default HostPage;
