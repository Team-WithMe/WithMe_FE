import { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@components/common/Logo';
import ProgressBar from '@components/host/ProgressBar';
import Button from '@components/common/Button';
import { hostPageData } from '@lib/staticData';
import { RootState } from '@store/rootReducer';
import { nextHostPageAction, prevHostPageAction } from '@store/host/host.slice';
import { HostLayoutContainer } from './HostLayout.styled';

const HostLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const dispatch = useDispatch();
	const { hostPageNum } = useSelector((state: RootState) => state.host);

	const onMovePage = (mode: 'prev' | 'next') => () => {
		if (mode === 'prev') hostPageNum > 0 && dispatch(prevHostPageAction());
		else if (mode === 'next') hostPageNum < 4 && dispatch(nextHostPageAction());
	};

	return (
		<HostLayoutContainer>
			<Logo noLink />
			<h2 className="host__title">{hostPageData[hostPageNum].title}</h2>
			<div className="host__content">
				<ProgressBar percent={hostPageData[hostPageNum].percent} />
				{children}
				<div className="host__button-group">
					<Button onClick={onMovePage('prev')} bgColor="gray_ee" color="gray_33" fullSize py={12}>
						{hostPageNum === 0 ? '홈으로 돌아가기' : hostPageNum === 4 ? '팀페이지로 이동하기' : '전 단계로 돌아가기'}
					</Button>
					<Button onClick={onMovePage('next')} bgColor="primary" color="white" fullSize py={12}>
						{hostPageNum === 4 ? '홈으로 돌아가기' : '모집중인 팀 등록하기'}
					</Button>
				</div>
			</div>
		</HostLayoutContainer>
	);
};

export default HostLayout;
