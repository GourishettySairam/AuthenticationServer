const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
# morgan is used for logging information onto the console

app.use(express.static(__dirname + '/public'));
# static is used to serve static files stored in public directory

# If folders in public folder are not requested then the below code gets executed and msg is displayed
app.use((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body>This is an express server</body></html>');
});


const server = http.createServer(app);

server.listen(port, hostname , () => {
  console.log(`server running at http://${hostname}:${port}`);
})
