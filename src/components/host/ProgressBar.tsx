import { FC } from 'react';
import * as S from './ProgressBar.styled';

const ProgressBar: FC<{ percent: number }> = ({ percent }) => (
	<S.Container>
		<S.Item percent={percent} />
	</S.Container>
);

export default ProgressBar;
