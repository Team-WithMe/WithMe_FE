import { FC, ReactNode } from 'react';
import { Card, Text, Title } from '@with-me/ui';
import S from './HostCardWrapper.styled';

interface HostCardWrapperProps {
	children: ReactNode;
	title: string;
	description?: string;
	suffix?: ReactNode;
}

const HostCardWrapper: FC<HostCardWrapperProps> = ({ children, title, description, suffix }) => (
	<Card
		title={
			<S.TitleWrapper>
				<Title size="h5">{title}</Title>
				{description && (
					<Text color="guide" size="sm" weight="light">
						{description}
					</Text>
				)}
				{suffix && <S.TitleSuffix>{suffix}</S.TitleSuffix>}
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
