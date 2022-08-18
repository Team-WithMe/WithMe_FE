const withTM = require('next-transpile-modules')(['@with-me/design']);
// const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
module.exports = withTM({
	reactStrictMode: true,
	experimental: {
		esmExternals: false
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		});

		return config;
	}
});
