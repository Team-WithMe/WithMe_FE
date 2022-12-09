enum DEVICE_SIZES {
	MOBILE = 320,
	TABLET = 768,
	LAPTOP = 1025,
	DESKTOP = 1281
}

export const deviceSizes = {
	mobile: { width: DEVICE_SIZES.MOBILE },
	tablet: { width: DEVICE_SIZES.TABLET },
	laptop: { width: DEVICE_SIZES.LAPTOP },
	desktop: { width: DEVICE_SIZES.DESKTOP }
};

export const mediaQueries = {
	mobile: `only screen and (max-width: ${DEVICE_SIZES.MOBILE})`,
	tablet: `only screen and (max-width: ${DEVICE_SIZES.TABLET})`,
	laptop: `only screen and (max-width: ${DEVICE_SIZES.LAPTOP})`,
	desktop: `only screen and (max-width: ${DEVICE_SIZES.DESKTOP})`
};
