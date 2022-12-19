import { createReadStream } from "fs"
import { access, constants } from 'node:fs/promises'
import currentlyIn from "./currentlyIn.js"

const readFile = async (arg) => {
    try {
        await access(arg, constants.R_OK)
        const stream = createReadStream(arg);
        stream.on("close", () => {
          currentlyIn();
        });
        stream.pipe(process.stdout);
      } catch(err) {
        console.error("Operation failed")
        currentlyIn()
      }
}

export default readFile