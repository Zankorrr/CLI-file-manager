import currentlyIn from "./currentlyIn.js"
import operationFiled from "./operationFailed.js"
import { access } from 'node:fs/promises'

const changeDir = async (arg) => {
  try {
    await access(arg)
    process.chdir(arg)
    currentlyIn()
  } catch(err) {
    operationFiled()
  }
}

export default changeDir