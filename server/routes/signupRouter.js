const express = require('express');
const bodyParser = require('body-parser')

const signupRouter = express.Router();

signupRouter.use(bodyParser.json())

signupRouter.route('/')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  next();
})
.get((req,res,next)=>{
  res.end('Get operation not supported on signup');
})
.post((req,res,next)=>{
  console.log(req.body.username);
  console.log(req.body.password);
  res.write('signup successful<br>');
  res.end('Welcome ' + req.body.username);
});

signupRouter.route('/:id')
.all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  next();
})
.get((req,res,next)=>{
  res.end('your id is ' + req.params.id);
})
.post((req,res,next)=>{
  res.end('signup operation not supported')
})

module.exports = signupRouter;
