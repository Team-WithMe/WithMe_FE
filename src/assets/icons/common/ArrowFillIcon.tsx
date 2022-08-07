import { FC, SVGProps } from 'react';

const ArrowFillIcon: FC<SVGProps<SVGSVGElement>> = ({
	width = '32',
	height = '32',
	viewBox = '0 0 32 32',
	fill = '#333',
	...props
}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} {...props}>
		<g fill="none" fillRule="evenodd">
			<g fill={fill}>
				<g>
					<path d="M7.36 4.866L7.36 27.266 26.825 16.067z" transform="translate(-362 -258) translate(362 258)" />
				</g>
			</g>
		</g>
	</svg>
);

export default ArrowFillIcon;
