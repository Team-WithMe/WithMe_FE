import { FC, ReactNode, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Card, Title } from '@with-me/ui';

import AppLayout from '@components/common/AppLayout';
import Navbar, { NavItemType } from '@components/common/Navbar';
import { MY_DETAIL_PAGE_NAME } from '@lib/constants/mypage';
import { MyPageContainer, MyPageWrapper } from './mypage.styled';
import ProfileCard from './ProfileCard';

interface MyPageLayoutProps {
	children: ReactNode;
}

const MyPageLayout: FC<MyPageLayoutProps> = ({ children }) => {
	const { pathname } = useRouter();

	const MY_PAGE_PRIFIX = '/mypage/123/' as const;
	const current_page_name = pathname.split('/')[3];

	const nav_items: NavItemType[] = useMemo(
		() =>
			MY_DETAIL_PAGE_NAME.map(({ key, label, pageName }) => ({
				active: current_page_name === pageName,
				key,
				label,
				toPage: `${MY_PAGE_PRIFIX}${pageName}`
			})),
		[current_page_name]
	);

	return (
		<AppLayout>
			<MyPageContainer>
				<Title weight="regular" size="h3">
					마이 페이지
				</Title>
				<MyPageWrapper>
					<div className="layout__info">
						<ProfileCard />
						<Navbar items={nav_items} />
					</div>
					<div className="layout__content">
						<Card>{children}</Card>
					</div>
				</MyPageWrapper>
			</MyPageContainer>
		</AppLayout>
	);
};

export default MyPageLayout;
