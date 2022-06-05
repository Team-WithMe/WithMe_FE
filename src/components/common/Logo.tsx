import { FC } from 'react';
import Link from 'next/link';

import { LogoContainer, LogoIconStyled } from './Logo.styled';

interface Props {
	noLink?: boolean;
}

//* noLink 로 props 를 보내면 로고를 클릭해도 '/' 으로 가지 않습니다.
//* ex: <Logo noLink />
const Logo: FC<Props> = ({ noLink }) => (
	<LogoContainer noLink={noLink}>
		<Link href="/">
			<a>
				<LogoIconStyled />
				<span>WithMe</span>
			</a>
		</Link>
	</LogoContainer>
);

export default Logo;
