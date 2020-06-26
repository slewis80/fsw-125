const express = require('express')
const todoRouter = express.Router()
const {v4:uuid} = require('uuid')

// Data
const todos = [
    {
        name: "ToDo 1",
        description: "first todo",
        imageUrl: "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
        completed: false,
        _id: uuid()
    },
    {
        name: "ToDo 2",
        description: "second todo",
        imageUrl: "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
        completed: false,
        _id: uuid()
    },
    {
        name: "ToDo 3",
        description: "third todo",
        imageUrl: "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
        completed: false,
        _id: uuid()
    },
    {
        name: "ToDo 4",
        description: "fourth todo",
        imageUrl: "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
        completed: false,
        _id: uuid()
    },
    {
        name: "ToDo 5",
        description: "fifth todo",
        imageUrl: "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
        completed: false,
        _id: uuid()
    }
]

// Routes
todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo.completed = false
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`Successfully added "${newTodo.name}" to the todo list!`)
    });

todoRouter.route("/:todoId")
    .get((req, res) => {
        const todoId = req.params.todoId
        const foundTodo = todos.find(todo => todo._id === todoId)
        res.send(foundTodo)
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const newTodo = req.body
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], newTodo)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send(`Successfully deleted todo!`)
    });

    module.exports = todoRouter;
