import { homedir } from 'os'
import readline from 'readline/promises'
import currentlyIn from './handlers/currentlyIn.js'

const username = process.argv.find((item) => item.startsWith('--username='))?.slice(11) || 'Anonymous'
process.chdir(homedir())
console.log(`Welcome to the File Manager, ${username}!\n`)
currentlyIn()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (input) => {
  switch (input) {
    case '.exit':
      rl.close()
      break;
    default:
      break;
  }
})
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`)
  })