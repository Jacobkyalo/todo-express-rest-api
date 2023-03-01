const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please enter a todo text"],
        min: 4,
    },
    completed: {
        type: Boolean,
    },
});

module.exports = mongoose.model("Todo", TodoSchema);
