import { createReadStream } from "fs"
import { access, constants } from 'node:fs/promises'
import currentlyIn from "./currentlyIn.js"
import operationFiled from "./operationFailed.js"

const readFile = async (arg) => {
    try {
        await access(arg, constants.R_OK)
        const stream = createReadStream(arg);
        stream.on("close", () => {
          currentlyIn();
        });
        stream.pipe(process.stdout);
      } catch(err) {
        operationFiled()
      }
}

export default readFile