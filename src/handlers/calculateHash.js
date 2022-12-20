import { createHash } from 'crypto'
import { createReadStream } from "fs"
import { access, constants } from "fs/promises"
import currentlyIn from './currentlyIn.js'
import operationFiled from './operationFailed.js'

const calculateHash = async ([file, ...args]) => {
    try {
      await access(file, constants.R_OK)
      const hash = createHash('sha256')
      const input = createReadStream(file)
      input.pipe(hash).setEncoding('hex').pipe(process.stdout);
      input.on('end', () => {
        currentlyIn()
      })
    } catch(err) {
      operationFiled()
    }
};

export default calculateHash