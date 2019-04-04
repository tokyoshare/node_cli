const chalk = require("chalk");
const { db } = require("../db");
const { prompt, capitalize } = require("../utils/utils");
const newTodo = callback => {
	const q = chalk.blue("Type in your todo:");
	prompt(q).then(todo => {
		// add todo
		db.get("todos")
			.push({
				title: capitalize(todo),
				complete: false
			})
			.write();
		if (callback) callback();
	});
};

module.exports = {
	newTodo
};
