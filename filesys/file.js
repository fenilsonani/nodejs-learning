const fs = require('fs');

fs.readFile('./filesys/hello.txt', (err, data) => {
    if (err) {
        console.log('error');
    }
    console.log(data.toString());
});