// DEPENDENCIES //
const express = require('express');
const router = express.Router();

const Books = require('../models/books.js')

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}
// ROUTES //

// INDEX ROUTE //
router.get('/', isAuthenticated, (req, res) => {
    Books.find({}, (err, allBooks) => {
        res.render('index.ejs', {
            books: allBooks,
            currentUser: req.session.currentUser,
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
router.get('/new', isAuthenticated, async (req, res) => {
    res.render('new.ejs', {
        currentUser: req.session.currentUser,
    })
    })

// POST ROUTE for New Books //
router.post('/', isAuthenticated, (req, res) => {
    Books.create(req.body, (createdBook => {
        res.redirect('/')
    }))
})

// EDIT ROUTE for Check out/Check in
router.put('/:id/checkout', isAuthenticated, (req, res) => {
    Books.findByIdAndUpdate(req.params.id, {new: true}, (err, checkedBook) => {
        if (checkedBook.checkedOut == false) {
            checkedBook.checkedOut = true 
        } else {
            checkedBook.checkedOut = false
        }
        checkedBook.save()
        res.send(checkedBook)
    })
})

// EDIT ROUTE for Page//
router.get('/:id/edit', isAuthenticated, (req, res) => {
    Books.findById(req.params.id, (err, foundBook) => {
        res.render('edit.ejs', {
            book: foundBook, //pass in found book
            currentUser: req.session.currentUser,
        })
    })
})

// UPDATE ROUTE for editing books //
router.put('/:id', isAuthenticated, (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateBook) => {
        res.redirect('/')
    })
})

// SHOW ROUTE for book information //
router.get('/:id', isAuthenticated, (req, res) => {
    Books.findById(req.params.id, (err, foundBooks) => {
        res.render('show.ejs', {
            books: foundBooks,
            currentUser: req.session.currentUser,
        })
    })
})

// DELETE ROUTE //
router.delete('/:id', isAuthenticated,(req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, deleteBook) => {
        res.redirect('/') // redirect to index page
    })
})

// export router for use in index
module.exports = router