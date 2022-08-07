import React, { FC } from 'react';
import styled from '@emotion/styled';

const Menu = styled.button`
	width: 360px;
	height: 30px;
	background-color: white;
	border: 1px solid #d2d2d2;
	border-radius: 5px;
	margin: 10 0 10 0;
	padding-left: 15px;
	text-align: left;
`;

interface MenuButtonProps {
	children: string;
}

const MenuButton: FC<MenuButtonProps> = ({ children }) => {
	return <Menu>{children}</Menu>;
};

export default MenuButton;
