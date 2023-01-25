const port = 5000;


const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(req.method,req.url);

    
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}
);