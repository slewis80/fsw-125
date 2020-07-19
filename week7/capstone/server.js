const express = require('express')
const app = express()
const morgan = require('morgan')


// middleware
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/movies", require('./moviesRouter'))

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    res.send({"errMsg": err.message})
})


app.listen(7000, () => console.log('Server is running on Port 7000'))
