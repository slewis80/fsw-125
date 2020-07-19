const express = require('express')
const moviesRouter = express.Router()
const {v4:uuid} = require('uuid')
const movies = require('./movies')


// get all, post new
moviesRouter.route("/")
    .get((req, res) => {
        res.status(200).send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.status(201).send(movies)
    })


// get one, edit one, delete one
moviesRouter.route("/:movieId")
    .get((req, res, next) => {
        const movieId = req.params.movieId
        const foundMovie = movies.find(movie => movie._id === movieId)
            if(!foundMovie){
                const error = new Error(`The movie with the ID of ${movieId} was not found`)
                res.status(500)
                return next(error)
            }
        res.status(200).send(foundMovie)
    })
    .put((req, res, next) => {
        const movieId = req.params.movieId
        const foundMovie = movies.find(movie => movie._id === movieId)
            if(!foundMovie){
                const error = new Error(`The movie with the ID of ${movieId} was not found`)
                res.status(500)
                return next(error)
            }
        const newMovie = req.body
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], newMovie)
        res.status(201).send(updatedMovie)
    })
    .delete((req, res, next) => {
        const movieId = req.params.movieId
        const foundMovie = movies.find(movie => movie._id === movieId)
            if(!foundMovie){
                const error = new Error(`The movie with the ID of ${movieId} was not found`)
                res.status(500)
                return next(error)
            }
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.status(200).send(movies)
    })


// search
moviesRouter.route("/search/title")
    .get((req, res, next) => {
        const title = req.query.title.toLowerCase()
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(title))
            if(filteredMovies.length === 0){
                const error = new Error(`No movies found with the title ${title}`)
                res.status(500)
                return next(error)
            }
        res.status(200).send(filteredMovies)
    })

moviesRouter.route("/search/genre")
.get((req, res, next) => {
    const genre = req.query.genre.toLowerCase()
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre)
        if(filteredMovies.length === 0){
            const error = new Error(`No movies found with the genre ${genre}`)
            res.status(500)
            return next(error)
        }
    res.status(200).send(filteredMovies)
})

moviesRouter.route("/search/nowShowing")
    .get((req, res, next) => {
        const filteredMovies = movies.filter(movie => movie.nowShowing === true)
            if(filteredMovies.length === 0){
                const error = new Error(`No movies found.`)
                res.status(500)
                return next(error)
            }
        res.status(200).send(filteredMovies)
    })

moviesRouter.route("/search/releaseYear")
.get((req, res, next) => {
    const releaseYearString = req.query.releaseYear
    const releaseYear = parseInt(releaseYearString)
    const filteredMovies = movies.filter(movie => movie.releaseYear === releaseYear)
        if(filteredMovies.length === 0){
            const error = new Error(`No movies found released in the year ${releaseYear}`)
            res.status(500)
            return next(error)
        }
    res.status(200).send(filteredMovies)
})

moviesRouter.route("/search/actor")
    .get((req, res, next) => {
        const actor = req.query.actor
        console.log(actor)
        const filteredMovies = movies.filter(movie => movie.mainStars.includes(actor))
            if(filteredMovies.length === 0){
                const error = new Error(`No movies found with the actor ${actor}`)
                res.status(500)
                return next(error)
            }
        res.status(200).send(filteredMovies)
    })





module.exports = moviesRouter