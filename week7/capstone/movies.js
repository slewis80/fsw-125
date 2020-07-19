const {v4:uuid} = require('uuid')

const movies = [
    {
        title: "Trolls World Tour",
        genre: "Family",
        nowShowing: true,
        releaseYear: 2020,
        mainStars: ["Anna Kendrick", "Justin Timberlake", "Rachel Bloom", "James Corden"],
        img: "https://m.media-amazon.com/images/M/MV5BMTI5NmViY2YtNDk5NC00NjY2LWFlNGYtOGEwNzY1MTZmMjFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Jumanji: The Next Level",
        genre: "action",
        nowShowing: true,
        releaseYear: 2019,
        mainStars: ["Dwayne Johnson", "Jack Black", "Kevin Hart", "Karen Gillan"],
        img: "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "The Dark Knight Rises",
        genre: "action",
        nowShowing: false,
        releaseYear: 2012,
        mainStars: ["Christian Bale", "Tom Hardy", "Anne Hathaway", "Gary Oldman"],
        img: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Bloodshot",
        genre: "action",
        nowShowing: false,
        releaseYear: 2020,
        mainStars: ["Vin Diesel", "Eiza González", "Sam Heughan", "Toby Kebbell"],
        img: "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_UY209_CR13,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        genre: "fantasy",
        nowShowing: false,
        releaseYear: 2003,
        mainStars: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom"],
        img: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Ghostbusters",
        genre: "action",
        nowShowing: true,
        releaseYear: 1984,
        mainStars: ["Bill Murray", "Dan Aykroyd", "Sigourney Weaver", "Harold Ramis"],
        img: "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Bumblebee",
        genre: "action",
        nowShowing: true,
        releaseYear: 2018,
        mainStars: ["Hailee Steinfeld", "Jorge Lendeborg Jr.", "John Cena", "Jason Drucker"],
        img: "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "The Lego Movie",
        genre: "family",
        nowShowing: false,
        releaseYear: 2014,
        mainStars: ["Chris Pratt", "Will Ferrell", "Elizabeth Banks", "Will Arnett"],
        img: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Playing With Fire",
        genre: "comedy",
        nowShowing: false,
        releaseYear: 2019,
        mainStars: ["John Cena", "Keegan-Michael Key", "John Leguizamo", "Tyler Mane"],
        img: "https://m.media-amazon.com/images/M/MV5BNTg4YjQyMDAtZWFiYi00OTMzLWJiYTgtMzRiNWMzMTAzMDQ0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Planes, Trains & Automobiles",
        genre: "comedy",
        nowShowing: true,
        releaseYear: 1987,
        mainStars: ["Steve Martin", "John Candy", "Laila Robins", "Michael McKean"],
        img: "https://m.media-amazon.com/images/M/MV5BM2I1ZWNkYjEtYWY3ZS00MmMwLWI5OTEtNWNkZjNiYjIwNzY0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Bad Moms",
        genre: "comedy",
        nowShowing: true,
        releaseYear: 2016,
        mainStars: ["Mila Kunis", "Kathryn Hahn", "Kristen Bell", "Christina Applegate"],
        img: "https://m.media-amazon.com/images/M/MV5BMjIwNzE5MTgwNl5BMl5BanBnXkFtZTgwNjM4OTA0OTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "The Addams Family",
        genre: "comedy",
        nowShowing: false,
        releaseYear: 1991,
        mainStars: ["Anjelica Huston", "Raul Julia", "Christopher Lloyd", "Dan Hedaya"],
        img: "https://m.media-amazon.com/images/M/MV5BODc1NmY0MDUtNjUzNS00ODdhLWJlN2ItMTgwZjczZjI0MDkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR9,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        genre: "fantasy",
        nowShowing: false,
        releaseYear: 2009,
        mainStars: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Michael Gambon"],
        img: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        genre: "fantasy",
        nowShowing: true,
        releaseYear: 1980,
        mainStars: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams"],
        img: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Indiana Jones and the Temple of Doom",
        genre: "action",
        nowShowing: false,
        releaseYear: 1984,
        mainStars: ["Harrison Ford", "Kate Capshaw", "Ke Huy Quan", "Amrish Puri"],
        img: "https://m.media-amazon.com/images/M/MV5BMGI1NTk2ZWMtMmI0YS00Yzg0LTljMzgtZTg4YjkyY2E5Zjc0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Inside Out",
        genre: "family",
        nowShowing: true,
        releaseYear: 2015,
        mainStars: ["Amy Poehler", "Bill Hader", "Lewis Black", "Mindy Kaling"],
        img: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 1",
        genre: "fantasy",
        nowShowing: true,
        releaseYear: 2010,
        mainStars: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Bill Nighy"],
        img: "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Mean Girls",
        genre: "comedy",
        nowShowing: false,
        releaseYear: 2004,
        mainStars: ["Lindsay Lohan", "Jonathan Bennett", "Rachel McAdams", "Tina Fey"],
        img: "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_UY209_CR4,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Jurassic Park",
        genre: "action",
        nowShowing: true,
        releaseYear: 1993,
        mainStars: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough"],
        img: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX140_CR0,0,140,209_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "The Avengers",
        genre: "action",
        nowShowing: false,
        releaseYear: 2012,
        mainStars: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Chris Hemsworth"],
        img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        _id: uuid() 
    },
    {
        title: "Onward",
        genre: "family",
        nowShowing: false,
        releaseYear: 2020,
        mainStars: ["Tom Holland", "Chris Pratt", "Julia Louis-Dreyfus", "Octavia Spencer"],
        img: "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
        _id: uuid() 
    }

]

module.exports = movies