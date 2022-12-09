import { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Text } from '@with-me/ui';
import type { NavItemType } from '@src/types/common';

interface NavbarProps {
	items: NavItemType[];
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Item = styled.a<{ active: boolean }>`
	padding: 10px 20px;
	border-radius: 4px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.gray_ee)};
	cursor: pointer;
	transition: 250ms;
	background-color: ${({ theme }) => theme.colors.white};

	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};

		> span {
			transition: 250ms;
			color: ${({ theme }) => theme.colors.gray_33};
			font-weight: 500;
		}
	}
`;

const Navbar: FC<NavbarProps> = ({ items }) => {
	return (
		<Container>
			{items.map(({ active, key, label, toPage }) => (
				<Link key={key} href={toPage}>
					<Item active={active}>
						<Text
							size="xl"
							color={active ? 'defalut' : 'guide'}
							weight={active ? 'medium' : 'light'}
						>
							{label}
						</Text>
					</Item>
				</Link>
			))}
		</Container>
	);
};

export default Navbar;
