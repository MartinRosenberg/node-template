/**
 * @param {string[]} xs
 */
const tasks = (xs) => xs.join(' && ')

module.exports = {
	hooks: {
		'pre-commit': tasks(['lint-staged', 'sort-package-json']),
	},
}
