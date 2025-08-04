
let fs = require('fs');

fs.writeFile('myCode.text','Hi From NodeJs',() => {
    console.log('File Created')
})