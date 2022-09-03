import React, { FC } from 'react';
import styled from '@emotion/styled';
import TeamLayout from '@components/layouts/TeamLayout';
import ContentBox from '@components/teamPageComponent/ContentBox';

const TeamPage: FC = () => {
	return (
		<TeamLayout>
			<ContentBox title={'공지사항'}>
				<div>안녕ㄹ하세요?</div>
			</ContentBox>
		</TeamLayout>
	);
};

export default TeamPage;
