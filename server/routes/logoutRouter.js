const express = require('express');
const bodyParser = require('body-parser')

const logoutRouter = express.Router();

logoutRouter.use(bodyParser.json())

logoutRouter.route('/')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  next();
})
.get((req,res,next)=>{
  res.end('Get operation not supported on logout');
})
.post((req,res,next)=>{
  console.log(req.body.username);
  console.log(req.body.password);
  res.write('logout successful<br>');
  res.end('Welcome ' + req.body.username);
});

logoutRouter.route('/:id')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  next();
})
.get((req,res,next)=>{
  res.end('your id is ' + req.params.id);
})
.post((req,res,next)=>{
  res.end('operation not supported')
})

module.exports = logoutRouter;
