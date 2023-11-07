const GenreModel = require("../models/Genre.model")

module.exports.genresController = {

    getGenres: (req, res) => {
        GenreModel.find({})
        .then((genres) => res.json(genres))
    },
    addGenre: (req, res) =>{
        GenreModel.create({
            genreName: req.body.genreName,
            genreDescription: req.body.genreDescription
        }).then(() => res.json('genre has been added   '))

    },
    deleteGenre: (req, res) => {
        GenreModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('genre has been deleted'))

    }

}