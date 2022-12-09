const calcRem = (size: number) => `${size / 16}rem`;

export const fontSizes = {
	small: calcRem(14),
	base: calcRem(16),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(22),
	xxxl: calcRem(24),
	big: calcRem(30),
	subTitleSize: calcRem(35),
	titleSize: calcRem(40)
};
