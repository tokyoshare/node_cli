const chalk = require("chalk");
const args = process.argv;

//Command controllers
const { newTodo } = require("./cmd/new");
const { getTodos } = require("./cmd/get");
const { completeTodo } = require("./cmd/complete");

//Command source
const commands = ["-n", "new", "-g", "get", "-c", "complete", "-h", "help"];

// usage represents the help guide
const usage = function() {
	const usageText = `
  Todo helps you manage your tasks.
  Usage:
    todo <command>
    ---------------------------------------------
    commands can be:
    ---------------------------------------------
    -n or new:      used to create a new todo
    -g or get:      used to retrieve your todos
    -c or complete: used to mark a todo as complete
    -h or help:     used to print the usage guide
  `;
	const log = chalk.green(usageText);
	console.log(log);
};

// used to log errors to the console in red color
const errorLog = error => {
	const eLog = chalk.red(error);
	console.log(eLog);
};

// we make sure the length of the arguments is exactly three
if (args.length > 3) {
	errorLog(`  Only one argument can be accepted`);
	usage();
}

switch (args[2]) {
	case "-h":
	case "help":
		usage();
		break;
	case "-n":
	case "new":
		newTodo(() => getTodos());
		break;
	case "-g":
	case "get":
		getTodos();
		break;
	case "-c":
	case "complete":
		completeTodo(() => getTodos());
		break;
	default:
		errorLog("  Invalid command passed");
		usage();
}
