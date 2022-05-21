import { FC, ReactNode } from 'react';

import Logo from '@components/common/Logo';

const HostLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<Logo />
			{children}
		</div>
	);
};

export default HostLayout;
