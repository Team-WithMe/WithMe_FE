import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@with-me/ui';

import Logo from '@components/common/Logo';
import ProgressBar from '@components/host/ProgressBar';
import TeamDescription from '@components/host/TeamDescription';
import TeamGoal from '@components/host/TeamGoal';
import TeamName from '@components/host/TeamName';
import TeamSkillSeletor from '@components/host/TeamSkillSeletor';
import TeamSuccess from '@components/host/TeamSuccess';
import { hostPageData } from '@lib/constants/host';
import { nextHostPageAction, prevHostPageAction } from '@store/host/host.slice';
import { RootState } from '@store/rootReducer';
import { HostContainer } from './styled';

const hostComponentData = {
	0: <TeamGoal />,
	1: <TeamSkillSeletor />,
	2: <TeamName />,
	3: <TeamDescription />,
	4: <TeamSuccess />
};

const HostPage = () => {
	const dispatch = useDispatch();
	const { hostPageNum } = useSelector((state: RootState) => state.host);

	const onMovePage = (mode: 'prev' | 'next') => () => {
		if (mode === 'prev') hostPageNum > 0 && dispatch(prevHostPageAction());
		else if (mode === 'next') hostPageNum < 4 && dispatch(nextHostPageAction());
	};

	const HostComponent = useCallback(() => hostComponentData[hostPageNum], [hostPageNum]);

	return (
		<HostContainer>
			<Logo />
			<h2 className="host__title">{hostPageData[hostPageNum].title}</h2>
			<div className="host__content">
				<ProgressBar percent={hostPageData[hostPageNum].percent} />
				<HostComponent />
				<div className="host__button-group">
					<Button onClick={onMovePage('prev')} type="gray" fullSize>
						{hostPageNum === 0
							? '홈으로 돌아가기'
							: hostPageNum === 4
							? '팀페이지로 이동하기'
							: '전 단계로 돌아가기'}
					</Button>
					<Button onClick={onMovePage('next')} type="primary" fullSize>
						{hostPageNum === 4 ? '홈으로 돌아가기' : '모집중인 팀 등록하기'}
					</Button>
				</div>
			</div>
		</HostContainer>
	);
};

export default HostPage;
