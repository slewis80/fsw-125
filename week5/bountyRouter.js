const express = require('express');
const bountyRouter = express.Router();
const {v4:uuid} = require('uuid');

// Data
const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 50000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: false,
        bountyAmount: 150000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 75000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Maul",
        living: false,
        bountyAmount: 50000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: true,
        bountyAmount: 25000,
        type: "Jedi",
        _id: uuid()
    }
]



// Routes
bountyRouter.route("/")
    .get((req, res) => {
        res.status(200).send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty)
        res.status(200).send(newBounty)
    });



bountyRouter.route("/:bountyId")
    .get((req, res, next) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
            if(!foundBounty) {
                const error = new Error(`The bounty with the ID of ${bountyId} was not found.`)
                res.status(500)
                return next(error)
            }
        res.status(200).send(foundBounty)
    })
    .put((req, res, next) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
            if(!foundBounty) {
                const error = new Error(`The bounty with the ID of ${bountyId} was not found.`)
                res.status(500)
                return next(error)
            }
        const newBounty = req.body
        console.log(newBounty)
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], newBounty)
        res.status(200).send(updatedBounty)
    })
    .delete((req, res, next) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
            if(!foundBounty) {
                const error = new Error(`The bounty with the ID of ${bountyId} was not found.`)
                res.status(500)
                return next(error)
            }
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty...`)
    });

module.exports = bountyRouter
