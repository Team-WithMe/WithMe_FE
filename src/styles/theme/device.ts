export const deviceSizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	tabletL: '1024px',
	NoteBook: '1440px'
};

export const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
	NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`
};
