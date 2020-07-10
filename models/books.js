// required linking of dependencies
const mongoose = require('mongoose')

// creating the schema for the book information to be stored in the DB
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String},
    genre: {type: String},
    checkedOut: {type: Boolean ,default: false},
    checkedUser: {type: String},
    img: {type: String},
})

// creating a variable to allow other pages to pull info from this schema
const Books = mongoose.model('Books', bookSchema)

// exporting this schema for other pages to use
module.exports = Books