import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ANIMATION_TIME } from '@src/constants';

const backDropFadeIn = keyframes`
	0% { background-color: rgba(0, 0, 0, 0.25); }
	100% { 	background-color: rgba(0, 0, 0, 0.75); }
`;

const backDropFadeOut = keyframes`
  0% { background-color: rgba(0, 0, 0, 0.75); }
  100% { background-color: rgba(0, 0, 0, 0.25); }
`;

const contentFadeIn = keyframes`
	0% { transform: scale(0.95); } 
	100% { 	transform: scale(1); }
`;

const contentFadeOut = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(0.95); }
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BackDrop = styled.div<{ isShow?: boolean }>`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 10;
	background-color: rgba(0, 0, 0, ${({ isShow }) => (isShow ? 0.75 : 0.25)});
	animation-name: ${({ isShow }) => (isShow ? backDropFadeIn : backDropFadeOut)};
	animation-duration: ${ANIMATION_TIME}ms;
`;

export const Content = styled.div<{ isShow: boolean }>`
	position: absolute;
	z-index: 11;
	animation-name: ${({ isShow }) => (isShow ? contentFadeIn : contentFadeOut)};
	animation-duration: ${ANIMATION_TIME}ms;

	@media ${({ theme }) => theme.device.tabletL} {
		margin-top: 80px;
	}
`;
