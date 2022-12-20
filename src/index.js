import { homedir } from 'os'
import path from 'path'
import readline from 'readline/promises'
import calculateHash from './handlers/calculateHash.js'
import changeDir from './handlers/changeDir.js'
import copyFileStream from './handlers/copyFile.js'
import createFile from './handlers/createFile.js'
import currentlyIn from './handlers/currentlyIn.js'
import deleteFile from './handlers/deleteFile.js'
import filesList from './handlers/filesList.js'
import goUpper from './handlers/goUpper.js'
import moveFileStream from './handlers/moveFile.js'
import readFile from './handlers/readFile.js'
import renameFile from './handlers/renameFile.js'

const username = process.argv.find((item) => item.startsWith('--username='))?.slice(11) || 'Anonymous'
const root = path.parse(homedir()).root
process.chdir(homedir())
console.log(`Welcome to the File Manager, ${username}!\n`)
currentlyIn()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on("line", (input) => {
  input = input.trim();
  let [command, ...args] = input.split(" ");
  switch (command) {
    case "hash":
      calculateHash(args)
      break;
    case "rm":
      deleteFile(args)
      break;
    case "mv":
      moveFileStream(args)
      break;
    case "cp":
      copyFileStream(args)
      break;
    case "rn":
      renameFile(args)
      break;
    case "add":
      createFile(args[0])
      break;
    case "cat":
      readFile(args[0])
      break;
    case "cd":
      changeDir(args[0]);
      break;
    case "ls":
      filesList();
      break;
    case "up":
    case "..":
      goUpper(root);
      break;
    case ".exit":
      rl.close();
      break;
    default:
      console.log("Invalid input");
      currentlyIn();
      break;
  }
})
  .on("SIGINT", () => rl.close())
  .on("close", () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
    process.nextTick(() => process.exit());
  });
