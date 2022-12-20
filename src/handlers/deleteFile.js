import { rm } from 'fs/promises'
import operationFiled from "./operationFailed.js"
import currentlyIn from "./currentlyIn.js"

const deleteFile = async ([file, ...args]) => {
  try {
    await rm(file)
    currentlyIn()
  } catch (err) {
    operationFiled()
  }
}

export default deleteFile