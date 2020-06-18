const express = require("express");
const app = express();

app.get('/user', (req, res) => {
    res.send({name: "Sabrina", age: 39});
});

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
});
