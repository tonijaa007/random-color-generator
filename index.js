import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const colorBlock = randomColor();
const hashBlock = `###############################
###############################
###############################
####                       ####
####         ${colorBlock}   ####
####                       ####
###############################
###############################`;

console.log(chalk.hex(colorBlock)(hashBlock));

if (argv[2] === 'green') {
}
