import React from 'react';
import { CloseIcon, LikeIcon, LogoIcon, MemberIcon, MembersIcon, StartArrowIcon } from '@assets/svg/common';
import { MainInfoWrapper } from './MainInfo.styled';

const MainInfo = () => {
	return (
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
					<MemberIcon />
					<span>10,000+</span>
					<div>누적 스터디 멤버 수</div>
				</div>
				<div>
					<MembersIcon />
					<span>3,000+</span>
					<div>누적 스터디 개설 수</div>
				</div>
				<div>
					<LikeIcon />
					<span>4.5</span>/5.0
					<div>스터디 평균 만족도</div>
				</div>
			</div>
		</MainInfoWrapper>
	);
};

export default MainInfo;
