import { FC, SVGProps } from 'react';

const ArrowDownIcon: FC<SVGProps<SVGSVGElement>> = ({
	width = '16',
	height = '26',
	viewBox = '0 0 16 26',
	fill = '#333',
	...props
}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} {...props}>
		<path fill={fill} fillRule="evenodd" d="M8.36 11.14L11.86 15.86 4.86 15.86z" transform="rotate(-180 8.36 13.5)" />
	</svg>
);

export default ArrowDownIcon;
