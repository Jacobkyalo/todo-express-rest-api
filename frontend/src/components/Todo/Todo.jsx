import Axios from "axios";
import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./Todo.scss";

export const Todo = ({ todo }) => {
    const [isUpdating, setIsUpdating] = useState("");
    const [newText, setNewText] = useState(todo.text);

    const { todos, setTodos } = useContext(TodoContext);

    // delete todo function
    const deleteTodo = async (id) => {
        await Axios.delete(`http://localhost:5000/api/todos/${id}`);
        setTodos(todos?.filter((todo) => todo._id !== id));
        console.log("deleted ", id);
    };

    //update todo function
    const updateTodo = async (e) => {
        e.preventDefault();
        const res = await Axios.put(
            `http://localhost:5000/api/todos/${isUpdating}`,
            {
                text: newText || todo.text,
                completed: todo.completed,
            }
        );
        console.log(res.data);
        setNewText("");
        setIsUpdating("");
        window.location.reload(false);
    };

    //if updating is true, render this
    const renderUpdateForm = () => {
        return (
            <div>
                <form className="update-form" onSubmit={(e) => updateTodo(e)}>
                    <input
                        type="text"
                        placeholder="New todo text"
                        value={newText}
                        name="text"
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button className="btn-1" type="submit">
                        Update
                    </button>
                    <button
                        className="btn-2"
                        type="button"
                        onClick={() => setIsUpdating("")}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        );
    };

    return (
        <>
            {isUpdating === todo._id ? (
                renderUpdateForm()
            ) : (
                <>
                    <li>
                        <p>{todo.text}</p>

                        <div>
                            <button
                                className="btn-1"
                                onClick={() => setIsUpdating(todo._id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn-2"
                                onClick={() => deleteTodo(todo._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                </>
            )}
        </>
    );
};
