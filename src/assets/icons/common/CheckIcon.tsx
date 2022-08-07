import { FC, SVGProps } from 'react';

const CheckIcon: FC<SVGProps<SVGSVGElement>> = ({
	width = '24',
	height = '24',
	viewBox = '0 0 24 24',
	fill = '#333',
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		width={width}
		height={height}
		viewBox={viewBox}
		stroke={fill}
		strokeWidth={2}
		{...props}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
	</svg>
);

export default CheckIcon;
