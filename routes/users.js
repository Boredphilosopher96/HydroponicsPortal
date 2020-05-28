var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const User = require('../models/User');

const secret = process.env.SECRET_KEY || 'Why does England need a queen?';

users.post('/register', (req, res) => {
  const today = new Date();
  const userData = {
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    createddate: today
  }

  User.findOne({
    username:req.body.username
  })
  .then(user => {
    if(!user) {
      bcrypt.hash(req.body.password,10,(err,hash) => {
        userData.password = hash;
        User.create(userData)
        .then(user => {
          res.json({status: user.username + 'registered!'});
        })
        .catch(err => {
          res.send('error : '+err);
        })
      })
    } else {
      res.json({ error : 'User already exists'});
    }
  })
  .catch(err => {
    res.send('error: '+err);
  })

})

users.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username,
    })
    .then(user => {
      if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            fullname: user.fullname,
            username: user.username
          }

          let token = jwt.sign(payload, secret, {
            expiresIn: 1440
          })
          res.send(token);
        } else {
          res.json({error : "user does not exist"});
        }
      } else {
        res.json({error : "user does not exist"});
      }
    })
    .catch(err => {
      res.send({error: err});
    })
});

users.get('/profile', (req,res) => {
    var decoded = jwt.verify(req.headers['authorization'], secret);

    User.findOne({
      _id: decoded._id
    })
    .then(user => {
        if(user) {
          res.json(user);
        } else {
          res.send("User does not exist");
        }
    })
    .catch(err => {
      res.send('error :'+err);
    })
})


module.exports = users