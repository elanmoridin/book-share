// DEPENDENCIES //
const express = require('express');
const router = express.Router();

const Books = require('../models/books.js')

// ROUTES //

// INDEX ROUTE //
router.get('/', (req, res) => {
    res.send('Hello I am Root')
})

// SEED ROUTE for DB //
router.get('/seed', (req, res) => {
    Books.deleteMany(() => {
        Books.create([
            {
                title: "The Eye of the World",
                author: "Robert Jordan",
                genre: "Fantasy",
            },
            {
                title: "The Complete Robot",
                author: "Isaac Asimov",
                genre: "Science Fiction",
            },
            {
                title: "The 4-Hour Chef",
                author: "Tim Ferriss",
                genre: "Self-Help",
            }
        ], (err, data) => {
            res.redirect('/')
        })
    })
})

// export router for use in index
module.exports = router