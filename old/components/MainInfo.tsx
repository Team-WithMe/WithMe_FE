import { Like, Member, Members } from '@with-me/icons';
import React from 'react';

import { MainInfoWrapper } from './MainInfo.styled';

const MainInfo = () => (
	<MainInfoWrapper>
		<div className="info-title">
			<div className="info-title-first">
				총 <span>10,000명</span>에 사람들이
			</div>
			<div className="info-title-second">
				<span>With Me</span> 에서 스터디를 진행했어요.
			</div>
		</div>
		<div>(2022년 4월 1일 기준)</div>
		<div className="images">
			<div>
				<Member width={96} height={96} />
				<span>10,000+</span>
				<div>누적 스터디 멤버 수</div>
			</div>
			<div>
				<Members width={96} height={96} />
				<span>3,000+</span>
				<div>누적 스터디 개설 수</div>
			</div>
			<div>
				<Like width={96} height={96} />
				<span>4.5</span>/5.0
				<div>스터디 평균 만족도</div>
			</div>
		</div>
	</MainInfoWrapper>
);

export default MainInfo;
