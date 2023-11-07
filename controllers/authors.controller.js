const AuthorModel = require('../models/Author.model')

module.exports.authorsController = {
    getAuthors: (req, res) => {
        AuthorModel.find({})
        .then((authors) => res.json(authors))
    },
    addAuthor: (req, res) =>{
        AuthorModel.create({
            authorName: req.body.authorName,
            aboutAuthor: req.body.aboutAuthor
        }).then(() => {
            res.json('author has been added')
        })
    }
    
}