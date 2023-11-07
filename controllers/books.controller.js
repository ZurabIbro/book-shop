const BookModel = require('../models/Book.model')

module.exports.booksController = {
    addBook: (req, res) => {
        BookModel.create({
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
        }) 
        .then(() => res.json('book has been added'))
    },
    deleteBook: (req, res) => {
        BookModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('book has been deleted'))
    },

    updateBook: (req, res) => {
        const { name, author, genre } = req.body
        BookModel.findByIdAndUpdate(req.params.id, {name, author, genre})
        .then(() => res.json('updated'))
    },

    getAllBooks: (req, res) => {
        BookModel.find({})
        .then((books) => res.json(books))
    },

    getSpecificBook: (req, res) => {
        BookModel.findOne({_id: req.params.id})
        .then((book) => res.json(book))
    },

    getBookOfSameGenre: (req, res) => {
        BookModel.find({})
        .then((book) => res.json(book))
    }
}