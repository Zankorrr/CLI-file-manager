import { readdir, stat } from 'fs/promises'
import path from 'path'
import currentlyIn from './currentlyIn.js'

const filesList = async () => {
  try {
    const folder = process.cwd()
    const files = await readdir(folder)
    // files.map(async (el) => {
    //   const str = await (await stat(path.join(folder, el))).isFile() ? 'file' : 'folder'
    //   console.log(`${el} - ${str}`)
    // })
    console.table(files)
  } catch (err) {
    const error = new Error("Operation failed")
    console.log(error)
  } finally {
    currentlyIn()
  }
}

export default filesList