import { homedir } from 'os'
import path from 'path'
import readline from 'readline/promises'
import currentlyIn from './handlers/currentlyIn.js'

const username = process.argv.find((item) => item.startsWith('--username='))?.slice(11) || 'Anonymous'
const root = path.parse(homedir()).root
process.chdir(homedir())
console.log(`Welcome to the File Manager, ${username}!\n`)
currentlyIn()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (input) => {
  switch (true) {
    case (input === 'up' || input === '..'):
      if (process.cwd() !== root) {
        process.chdir('..')
      }
      currentlyIn()
      break;
    case (input === '.exit'):
      rl.close()
      break;
    default:
      console.log('Invalid input');
      currentlyIn()
      break;
  }
})
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`)
  })