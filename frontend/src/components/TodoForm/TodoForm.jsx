import Axios from "axios";
import { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./TodoForm.scss";

export const TodoForm = () => {
    const [text, setText] = useState("");

    const { todos, setTodos } = useContext(TodoContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await Axios.post("http://localhost:5000/api/todos", {
            text: text,
        });
        const data = await res.data;

        setTodos([data, ...todos]);
        setText("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add todo</h2>
                <div>
                    <input
                        type="text"
                        value={text}
                        name="text"
                        onChange={(e) => setText(e.target.value)}
                        autoComplete="off"
                    />
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    );
};
