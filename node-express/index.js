const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const loginRouter = require('./routes/loginRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();
// to specify a middleware we use app.use

app.use(morgan('dev'));
// morgan is used for logging information onto the console

app.use(bodyParser.json());
// bcz we need to extract the json string present in request header

app.use('/login',loginRouter)
// Mounting login end point

app.use('/login/:id',loginRouter)


app.use(express.static(__dirname + '/public'));
// static is used to serve static files stored in public directory

app.use((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body>This is an express server</body></html>');
});
// If folders in public folder are not requested then the above code gets executed and msg is displayed


const server = http.createServer(app);

server.listen(port, hostname , () => {
  console.log(`server running at http://${hostname}:${port}`);
})
