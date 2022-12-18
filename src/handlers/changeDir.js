import currentlyIn from "./currentlyIn.js"

const changeDir = (arg) => {
  try {
    process.chdir(arg)
  } catch(err) {
    const error = new Error("Operation failed")
    console.log(error)
  } finally {
    currentlyIn()
  }
}

export default changeDir