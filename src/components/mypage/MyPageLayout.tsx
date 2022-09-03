import AppLayout from '@components/common/AppLayout';
import Navbar, { NavItemType } from '@components/common/Navbar';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

interface MyPageLayoutProps {
	children: ReactNode;
}

const MyPageLayout: FC<MyPageLayoutProps> = ({ children }) => {
	const { pathname } = useRouter();

	const ITEMS: NavItemType[] = [
		{
			active: pathname.split('/')[3] === 'myTeamList',
			key: '1',
			label: '내 팀',
			toPage: '/mypage/123/myTeamList'
		},
		{
			active: pathname.split('/')[3] === 'myArticle',
			key: '2',
			label: '내 작성글',
			toPage: '/mypage/123/myArticle'
		},
		{
			active: pathname.split('/')[3] === 'myLikeTeamList',
			key: '3',
			label: '좋아요한 팀',
			toPage: '/mypage/123/myLikeTeamList'
		}
	];

	return (
		<AppLayout>
			<Navbar items={ITEMS} />
			<div>{children}</div>
		</AppLayout>
	);
};

export default MyPageLayout;
