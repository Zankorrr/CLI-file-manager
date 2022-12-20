import { writeFile } from "fs/promises"
import currentlyIn from "./currentlyIn.js"

const createFile = (arg) => {
  writeFile(arg, '')
  currentlyIn()
}

export default createFile