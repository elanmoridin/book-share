// DEPENDENCIES //
const express = require('express');
const router = express.Router();

const Books = require('../models/books.js')

// ROUTES //

// INDEX ROUTE //
router.get('/', (req, res) => {
    res.send('Hello I am Root')
})

// export router for use in index
module.exports = router