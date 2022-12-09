import { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Text } from '@with-me/ui';
import { Code } from '@with-me/icons';
import { colors } from '@styles/theme';

interface LogoProps {
	noLink?: boolean;
}

const Container = styled.div<LogoProps>`
	cursor: pointer;
	transition: 250ms;

	${({ noLink }) =>
		noLink &&
		css`
			pointer-events: none;
		`}

	&:hover {
		filter: brightness(70%);
	}

	a {
		display: flex;
		align-items: center;
		gap: 3px;
	}
`;

/** @description noLink를 props를 넘겨주면 logo를 클릭해도 '/' 으로 가지 않습니다. */
const Logo: FC<LogoProps> = ({ noLink }) => (
	<Container noLink={noLink}>
		<Link href="/">
			<a>
				<Code fill={colors.primary} width={35} height={35} />
				<Text color="primary" weight="bold" size="xxl">
					WithMe
				</Text>
			</a>
		</Link>
	</Container>
);

export default Logo;
