const chalk = require("chalk");
const { db } = require("../db");
const { prompt } = require("../utils/utils");
const { getTodos } = require("./get");

const completeTodo = callback => {
	getTodos();
	const q = chalk.blue("Type task you want to finish:");
	prompt(q).then(n => {
		// add todo
		// check if the value is a number
		if (isNaN(n)) {
			let error = "Please provide a valid number for complete command";
			console.log(chalk.red(error));
			return;
		}

		// check if correct length of values has been passed
		let todosLength = db.get("todos").value().length;
		if (n > todosLength) {
			let error = "Please provide a valid number for complete command";
			console.log(chalk.red(error));
			return;
		}

		// update the todo item marked as complete
		db.set(`todos[${n - 1}].complete`, true).write();
		if (callback) callback();
	});
};
module.exports = {
	completeTodo
};
