const Todo = require("../models/Todos");

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id).exec();
    res.json(todo);
};

const createTodo = async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text,
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
    const todoToBeDeleted = Todo.findById(req.params.id);

    await todoToBeDeleted.deleteOne();
    res.json({ Message: "Todo deleted" });
};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
