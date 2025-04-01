import chalk from "chalk";
console.log("Hello")
console.log(chalk.bgCyan("LJU"))
console.log(chalk.blue.underline.bgYellow('hello')+chalk.red.bold.underline.bgWhite('Google'))
console.log(chalk.blue('Hello')+'world')
console.log(chalk.blue.bgRed.bold('Hello WOrld'))
console.log('Hello',chalk.underline.bgBlue('World'))
console.log(chalk.hex("#DEADED").bold("Bold Gray"))
const error=chalk.bold.red
const warning=chalk.bold.yellow
const success=chalk.hex("#008000")
console.log(error("Error Che"))
console.log(warning("Warning"))
console.log(success("Success"))