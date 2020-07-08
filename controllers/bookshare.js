// DEPENDENCIES //
const express = require('express');
const router = express.Router();

const Books = require('../models/books.js')

// ROUTES //

// INDEX ROUTE //
router.get('/', (req, res) => {
    Books.find({}, (err, allBooks) => {
        res.render('index.ejs', {
            books: allBooks,
        })
    })
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

// NEW ROUTE for new books
router.get('/new', async (req, res) => {
    res.render('new.ejs')
    })

// POST ROUTE for New Books //
router.post('/', (req, res) => {
    Books.create(req.body, (createdBook => {
        res.redirect('/')
    }))
})

// EDIT ROUTE for Page//
router.get('/:id/edit', (req, res) => {
    Books.findById(req.params.id, (err, foundBook) => {
        res.render('edit.ejs', {
            book: foundBook, //pass in found book
        })
    })
})

// UPDATE ROUTE for editing books //
router.put('/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateBook) => {
        res.redirect('/')
    })
})

// SHOW ROUTE for book information //
router.get('/:id', (req, res) => {
    Books.findById(req.params.id, (err, foundBooks) => {
        res.render('show.ejs', {
            books: foundBooks,
        })
    })
})

// DELETE ROUTE //
router.delete('/:id', (req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, deleteBook) => {
        res.redirect('/') // redirect to index page
    })
})

// export router for use in index
module.exports = router