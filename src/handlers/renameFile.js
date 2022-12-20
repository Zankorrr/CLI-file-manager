import { rename } from "fs/promises"
import currentlyIn from "./currentlyIn.js"
import operationFiled from "./operationFailed.js"

const renameFile = async (args) => {
  try {
    await rename(args[0], args[1])
    currentlyIn()
  } catch(err) {
    operationFiled()
  }
}

export default renameFile