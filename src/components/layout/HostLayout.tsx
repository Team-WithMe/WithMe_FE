import { FC, ReactNode, useMemo, useState } from 'react';

import Logo from '@components/common/Logo';
import { hostPageData } from '@lib/staticData';
import { HostPageNumType } from '@typings/host';
import { HostLayoutContainer } from './HostLayout.styled';

const HostLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const [pageNum, setPageNum] = useState<HostPageNumType>(0);

	const onMovePage = (mode: 'prev' | 'next') => () => {
		if (mode === 'prev') pageNum > 0 && setPageNum(prev => (prev -= 1) as HostPageNumType);
		else if (mode === 'next') pageNum < 4 && setPageNum(prev => (prev += 1) as HostPageNumType);
	};

	const hostTitle = useMemo(() => hostPageData[pageNum].title, [pageNum]);

	return (
		<HostLayoutContainer>
			<Logo />
			<h2 className="host__title">{hostTitle}</h2>
			{children}
			{pageNum}
			<div className="host__button-group">
				<button onClick={onMovePage('prev')}>prev</button>
				<button onClick={onMovePage('next')}>next</button>
			</div>
		</HostLayoutContainer>
	);
};

export default HostLayout;
