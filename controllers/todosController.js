const Todo = require("../models/Todos");

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTodo = async (req, res) => {
    await Todo.findById(req.params.id, (error, todo) => {
        if (error) {
            res.status(400).json({ message: error.message });
        } else {
            res.json(todo);
        }
    });
};

const createTodo = async (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    await newTodo.save();
    res.status(201).json(newTodo);
};

const updateTodo = async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedTodo);
};
const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id).remove();
    res.json({ Message: "Todo deleted" });
};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
