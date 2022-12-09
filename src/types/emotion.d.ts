import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string
			secondary: string
			success: string
			danger: string
			bgColor: string
			lineColor: string
			errorBgColor: string
			gray_22: string
			gray_48: string
			gray_71: string
			gray_80: string
			gray_aa: string
			gray_b0: string
			gray_c4: string
			gray_dd: string
			gray_ed: string
			white: string
		};
		device: {
			deviceSizes: {
				mobile: { width: number },
				tablet: { width: number },
				laptop: { width: number },
				desktop: { width: number }
			},
			mediaQueries: {
				mobile: string
				tablet: string
				laptop: string
				desktop: string
			}
		}
	}
}
