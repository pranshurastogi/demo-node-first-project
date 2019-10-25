const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;


const app = express();


function initial(req,res) {
    res.json({message: 'Welcome to Express API demo, created by Pranshu Rastogi.'});
}

app.get('/',initial);















// Start the server
const server = app.listen(port, (error) => {
    if (error) {return console.log(`Error: ${error}`);}

    console.log(`Server listening on port ${server.address().port}`);
});
