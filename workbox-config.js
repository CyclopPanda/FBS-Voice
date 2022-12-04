module.exports = {
	globDirectory: 'pages/',
	globPatterns: [
		'**/*.js'
	],
	swDest: 'pages/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};