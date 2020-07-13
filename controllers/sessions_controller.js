const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', { currentUser: req.session.currentUser, currentUser: req.session.currentUser })
})

sessions.get('/invalidpassword', (req, res) => {
    res.render('sessions/badpassword.ejs', { currentUser: req.session.currentUser, currentUser: req.session.currentUser })
  })

sessions.get('/invaliduser', (req, res) => {
    res.render('sessions/baduser.ejs', { currentUser: req.session.currentUser, currentUser: req.session.currentUser})
})

// on sessions form submit (log in)
sessions.post('/', (req, res) => {
  // Look for the username
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    // Database error
    if (err) {
      console.log(err)
      res.send('DB had an issue')
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      // console.log(req.body.username)
      res.redirect('sessions/invaliduser')
    } else {
      // user exists
      // check if password matches
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to session
        req.session.currentUser = foundUser
        // redirect back to our home page
        res.redirect('/')
      } else {
        // passwords do not match
        res.redirect('sessions/invalidpassword')
      }
    }
  })
})

sessions.delete('/', () => {
    console.log("I hit the route")
  req.session.destroy(() => {
      console.log('Logout successful')
    res.redirect('/')
  })
})

module.exports = sessions