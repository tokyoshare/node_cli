const chalk = require("chalk");
const { db } = require("../db");
const { prompt } = require("../utils/utils");
const getTodos = () => {
	const todos = db.get("todos").value();
	let index = 1;
	todos.forEach(todo => {
		let todoText = `${index++}. ${todo.title}`;
		if (todo.complete) {
			todoText += " ✔ ️"; // add a check mark
			todoText = chalk.strikethrough(todoText);
			todoText = chalk.green(todoText);
			console.log(todoText);
		} else {
			todoText = chalk.red(todoText);
			console.log(todoText);
		}
	});
};
module.exports = {
	getTodos
};
