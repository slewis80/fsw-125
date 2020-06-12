const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Main Page")
});

app.get("/movies", (req, res) => {
    res.send(["Onward",
    "Maleficent: Mistress of Evil",
    "Toy Story 4",
    "Sonic the Hedgehog",
    "Dolittle",
    "Birds of Prey",
    "Wonder Woman: Bloodlines",
    "Jumanji: The Next Level",
    "Hobbs & Shaw",
    "The Secret Life of Pets 2",
    "The Hustle",
    "Game Night",
    "Long Shot",
    "Napoleon Dynamite",
    "Spiderman",
    "Nacho Libre",
    "Ace Ventura: Pet Detective",
    "Yes Man"])
});

app.get("/movies/action", (req, res) => {
    res.send(["Hobbs & Shaw",
    "Birds of Prey",
    "Wonder Woman: Bloodlines",
    "Jumanji: The Next Level",
    "Spiderman"])
});

app.get("/movies/kids", (req, res) => {
    res.send(["Onward",
    "Maleficent: Mistress of Evil",
    "Toy Story 4",
    "Sonic the Hedgehog",
    "Dolittle",
    "The Secret Life of Pets 2"])
});

app.get("/movies/comedy", (req, res) => {
    res.send(["The Hustle",
    "Game Night",
    "Long Shot",
    "Napoleon Dynamite",
    "Nacho Libre",
    "Ace Ventura: Pet Detective",
    "Yes Man"])
});


app.listen(7070, () => {
    console.log("App is listening on port 7070!")
});