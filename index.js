import chalk from 'chalk';

const myUnusedVariable = 'test'
const x = 10
if (x === 10) {
    console.log(myUnusedVariable);
}
console.log(chalk.blue('It works'));
