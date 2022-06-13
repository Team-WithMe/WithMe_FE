import { FC } from 'react';
import { ProgressBarContainer } from './ProgressBar.styled';

export interface ProgressBarProps {
	percent: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percent }) => {
	return (
		<ProgressBarContainer percent={percent}>
			<div />
		</ProgressBarContainer>
	);
};

export default ProgressBar;
