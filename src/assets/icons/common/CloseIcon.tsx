import { FC, SVGProps } from 'react';

const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({
	width = '24',
	height = '24',
	viewBox = '0 0 24 24',
	fill = '#333',
	...props
}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} {...props}>
		<path
			fill={fill}
			fillRule="evenodd"
			d="M19.175 4.142c.189-.19.495-.19.683 0 .19.188.19.494 0 .683L12.683 12l7.175 7.175c.19.189.19.495 0 .683-.188.19-.494.19-.683 0L12 12.683l-7.175 7.175c-.165.166-.42.186-.608.062l-.075-.062c-.19-.188-.19-.494 0-.683L11.317 12 4.142 4.825c-.19-.189-.19-.495 0-.683.188-.19.494-.19.683 0L12 11.317z"
		/>
	</svg>
);

export default CloseIcon;
