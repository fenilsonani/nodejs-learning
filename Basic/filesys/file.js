const fs = require('fs');
const path = require('path');

// fs.readFile('./filesys/hello.txt', (err, data) => {
//     if (err) {
//         console.log('error');
//     }
//     console.log(data.toString());
// });


fs.writeFile(path.join(__dirname,'reply.txt'),"Hello Fenil",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Written");
})