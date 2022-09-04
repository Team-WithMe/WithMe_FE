import { useMemo } from 'react';
import styled from '@emotion/styled';
import { Text } from '@with-me/ui';

const FooterWrapper = styled.footer`
	width: 90%;
	max-width: 1640px;
	margin: 0 auto;
	border-radius: 15px 15px 0 0;
	border: 1px solid ${({ theme }) => theme.colors.gray_ee};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 25px 0;
	background-color: #fff;
`;

const Footer = () => {
	const nowYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<FooterWrapper>
			<Text color="guide" weight="light">
				Copyright &copy; {nowYear}. With me All Rights Reserved.
			</Text>
		</FooterWrapper>
	);
};

export default Footer;
