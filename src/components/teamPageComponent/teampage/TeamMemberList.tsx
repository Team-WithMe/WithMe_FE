import React, { FC } from 'react';
import styled from '@emotion/styled';

const TeamMemberListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Member = styled.div`
	display: flex;
	width: 33%;
	justify-content: center;
	margin: 10px 0 10px 0;
`;

const TeamMemberList: FC = () => {
	const fuckingDummyData = [
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수',
		'오호수'
	];
	return (
		<TeamMemberListWrapper>
			{fuckingDummyData.map((value, index) => (
				<Member key={index}>{value}</Member>
			))}
		</TeamMemberListWrapper>
	);
};

export default TeamMemberList;
