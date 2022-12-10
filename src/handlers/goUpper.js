import currentlyIn from "./currentlyIn.js"

const goUpper = (root) => {
  if (process.cwd() !== root) {
    process.chdir('..')
  }
  currentlyIn()
}

export default goUpper