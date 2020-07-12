const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/bounty", require('./bountyRouter.js'));

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    res.send({"errMsg": err.message})
})


app.listen(7000, () => console.log("App is listening on Port 7000!"));
