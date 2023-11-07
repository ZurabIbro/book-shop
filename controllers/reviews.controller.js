const ReviewModel = require('../models/Review.model')

module.exports.reviewController = {
    getReviews: (req, res) => {
        ReviewModel.find({})
        .then((reviews) => res.json(reviews))
    },
    addReview: (req, res) => {
        ReviewModel.create({
            text: req.body.text,
            author: req.body.author,
            book: req.body.book
        })
    },
    deleteReview: (req, res) => {
        ReviewModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('review deleted'))
    },
}
    