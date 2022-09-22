import { FC, ReactNode } from 'react';
import { Title } from '@with-me/ui';
import Logo from '@components/common/Logo';
import * as S from './HostLayout.styled';

interface HostLayoutProps {
	children: ReactNode;
	title: string;
}

const HostLayout: FC<HostLayoutProps> = ({ children, title }) => (
	<S.Container>
		<Logo />
		<Title>{title}</Title>
		<S.Wrapper>{children}</S.Wrapper>
	</S.Container>
);

export default HostLayout;
