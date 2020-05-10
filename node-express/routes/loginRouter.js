const express = require('express');
const bodyParser = require('body-parser')

const loginRouter = express.Router();

loginRouter.use(bodyParser.json())

loginRouter.route('/')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  next();
})
.get((req,res,next)=>{
  res.end('Get operation not supported on login');
})
.post((req,res,next)=>{
  console.log(req.body.username);
  console.log(req.body.password);
  res.write('login successful<br>');
  res.end('Welcome ' + req.body.username);
});

loginRouter.route('/:id')
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

module.exports = loginRouter;
