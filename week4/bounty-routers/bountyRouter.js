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
        living: true,
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
        living: true,
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
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty)
        res.send(`Successfully added "${newBounty.firstName} ${newBounty.lastName}" to the bounties list.`)
    });

bountyRouter.route("/:bountyId")
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const newBounty = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], newBounty)
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty...`)
    });

module.exports = bountyRouter
