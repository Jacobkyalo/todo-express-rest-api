const Todo = require("../models/Todos");

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getTodo = async (req, res) => {};
const createTodo = async (req, res) => {};
const updateTodo = async (req, res) => {};
const deleteTodo = async (req, res) => {};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
