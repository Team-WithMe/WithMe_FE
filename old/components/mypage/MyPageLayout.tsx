import { CSSProperties, FC, ReactNode, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Card, Title } from '@with-me/ui';

import AppLayout from 'components/common/AppLayout';
import Navbar from 'components/common/Navbar';
import { MY_DETAIL_PAGE_NAME } from '@src/constants/mypage';
import { colors } from '@styles/theme';
import type { NavItemType } from '@src/types/common';
import ProfileCard from './ProfileCard';
import { MyPageLayoutContainer, MyPageLayoutWrapper } from './mypage.styled';

interface MyPageLayoutProps {
	children: ReactNode;
}

const MyPageLayout: FC<MyPageLayoutProps> = ({ children }) => {
	const { pathname } = useRouter();

	const current_page_name = pathname.split('/')[3];

	const nav_items: NavItemType[] = useMemo(
		() =>
			MY_DETAIL_PAGE_NAME.map(({ key, label, pageName }) => ({
				active: current_page_name === pageName,
				key,
				label,
				toPage: `/mypage/${'123'}/${pageName}` //Todo api 나오면 user Id 변경
			})),
		[current_page_name]
	);

	const cardStyled: CSSProperties = useMemo(() => ({ minHeight: '100%' }), []);

	return (
		<AppLayout>
			<MyPageLayoutContainer>
				<Title weight="regular" size="h3">
					마이 페이지
				</Title>
				<MyPageLayoutWrapper>
					<div className="layout__info">
						<ProfileCard />
						<Navbar items={nav_items} />
					</div>
					<div className="layout__content">
						<Card borderColor={colors.gray_ee} style={cardStyled} px={30} py={30}>
							{children}
						</Card>
					</div>
				</MyPageLayoutWrapper>
			</MyPageLayoutContainer>
		</AppLayout>
	);
};

export default MyPageLayout;
