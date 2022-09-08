import { FC, ReactNode } from 'react';
import { Card, Text, Title } from '@with-me/ui';
import S from './HostCardWrapper.styled';

interface HostCardWrapperProps {
	children: ReactNode;
	description: string;
	title: string;
	suffix?: ReactNode;
}

const HostCardWrapper: FC<HostCardWrapperProps> = ({ children, description, title, suffix }) => (
	<Card
		title={
			<S.TitleWrapper>
				<Title size="h5">{title}</Title>
				<Text color="guide" size="sm" weight="light">
					{description}
				</Text>
				<S.TitleSuffix>{suffix}</S.TitleSuffix>
			</S.TitleWrapper>
		}
		fullSize
		px={20}
		py={20}
	>
		{children}
	</Card>
);

export default HostCardWrapper;
