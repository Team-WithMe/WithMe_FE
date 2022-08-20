import { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Title } from '@with-me/ui';

import Logo from '@components/common/Logo';
import ProgressBar from '@components/host/ProgressBar';
import { HOST_PAGE_DATA } from '@lib/constants/host';
import { nextHostPageAction, prevHostPageAction } from '@store/host/host.slice';
import type { RootState } from '@store/rootReducer';
import { HostBtnGroup, HostContainer, HostContentWrapper } from './HostLayout.styled';

const HostLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const dispatch = useDispatch();
	const { hostPageNum } = useSelector((state: RootState) => state.host);

	const onMovePage = (mode: 'prev' | 'next') => () => {
		if (mode === 'prev') hostPageNum > 0 && dispatch(prevHostPageAction());
		else if (mode === 'next') hostPageNum < 4 && dispatch(nextHostPageAction());
	};

	return (
		<HostContainer>
			<Logo />
			<Title>{HOST_PAGE_DATA[hostPageNum].title}</Title>
			<HostContentWrapper>
				<ProgressBar percent={HOST_PAGE_DATA[hostPageNum].percent} />
				{children}
				<HostBtnGroup>
					<Button onClick={onMovePage('prev')} fullSize type="gray">
						{hostPageNum === 0
							? '홈으로 돌아가기'
							: hostPageNum === 4
							? '팀페이지로 이동하기'
							: '전 단계로 돌아가기'}
					</Button>
					<Button onClick={onMovePage('next')} fullSize>
						{hostPageNum === 4 ? '홈으로 돌아가기' : '모집중인 팀 등록하기'}
					</Button>
				</HostBtnGroup>
			</HostContentWrapper>
		</HostContainer>
	);
};

export default HostLayout;
