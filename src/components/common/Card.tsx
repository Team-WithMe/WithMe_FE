import { FC, ReactNode } from 'react';
import { CardContainer } from './Card.styled';

const Card: FC<{ children: ReactNode }> = ({ children }) => {
	return <CardContainer>{children}</CardContainer>;
};

export default Card;
