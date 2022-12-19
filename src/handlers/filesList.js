import { readdir, stat } from 'fs/promises'
import path from 'path'
import currentlyIn from './currentlyIn.js'
import operationFiled from './operationFailed.js'

const filesList = async () => {
  try {
    const folder = process.cwd()
    const files = await readdir(folder)
    // files.map(async (el) => {
    //   const str = await (await stat(path.join(folder, el))).isFile() ? 'file' : 'folder'
    //   console.log(`${el} - ${str}`)
    // })
    console.table(files)
    currentlyIn()
  } catch (err) {
    operationFiled()
  }
}

export default filesList