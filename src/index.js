const welcome = () => {
    const username = process.argv.find((item) => item.startsWith('--username='))?.slice(11)
    console.log(`Welcome to the File Manager, ${username || 'Anonymous'}!`)
}

welcome()