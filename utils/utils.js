const rl = require("readline");
const prompt = question => {
	const r = rl.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	return new Promise((resolve, error) => {
		r.question(question, answer => {
			r.close();
			resolve(answer);
		});
	});
};

const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = {
	prompt,
	capitalize
};
