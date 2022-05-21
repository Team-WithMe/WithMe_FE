import { FC, ReactNode, useState } from 'react';

import Logo from '@components/common/Logo';
import ProgressBar from '@components/host/ProgressBar';
import Button from '@components/common/Button';
import { hostPageData } from '@lib/staticData';
import { HostPageNumType } from '@typings/host';
import { HostLayoutContainer } from './HostLayout.styled';

const HostLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const [pageNum, setPageNum] = useState<HostPageNumType>(0);

	const onMovePage = (mode: 'prev' | 'next') => () => {
		if (mode === 'prev') pageNum > 0 && setPageNum(prev => (prev -= 1) as HostPageNumType);
		else if (mode === 'next') pageNum < 4 && setPageNum(prev => (prev += 1) as HostPageNumType);
	};

	return (
		<HostLayoutContainer>
			<Logo noLink />
			<h2 className="host__title">{hostPageData[pageNum].title}</h2>
			<div className="host__content">
				<ProgressBar percent={hostPageData[pageNum].percent} />
				{children}
				<div className="host__button-group">
					<Button onClick={onMovePage('prev')} bgColor="gray_ee" color="gray_33" fullSize py={12}>
						{pageNum === 0 ? '홈으로 돌아가기' : pageNum === 4 ? '팀페이지로 이동하기' : '전 단계로 돌아가기'}
					</Button>
					<Button onClick={onMovePage('next')} bgColor="primary" color="white" fullSize py={12}>
						{pageNum === 4 ? '홈으로 돌아가기' : '모집중인 팀 등록하기'}
					</Button>
				</div>
			</div>
		</HostLayoutContainer>
	);
};

export default HostLayout;
