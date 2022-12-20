import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { access, constants, rm } from 'fs/promises'
import operationFiled from "./operationFailed.js"
import currentlyIn from "./currentlyIn.js"

const moveFileStream = async ([from, to, ...args]) => {
  try {
    await access(from, constants.R_OK)
    const read = createReadStream(from)
    const write = createWriteStream(to)
    await pipeline(read, write)
    await rm(from)
    currentlyIn()
  } catch (err) {
    operationFiled()
  }
}

export default moveFileStream