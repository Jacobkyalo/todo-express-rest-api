import { useContext, useEffect } from "react";
import Axios from "axios";
import { TodoContext } from "../../contexts/TodoContext";
import { Todo } from "../Todo/Todo";

export const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);

    const fetchTodos = async () => {
        const res = await Axios.get("http://localhost:5000/api/todos");
        const data = await res.data;
        setTodos(data);
        console.log(res.data);
    };

    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ul style={{ listStyle: "none" }}>
                {todos?.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
            <p
                style={{
                    marginTop: "1.5rem",
                    fontSize: "1.4rem",
                    color: "#fff",
                }}
            >
                You have {todos?.length} todos 🥰
            </p>
        </>
    );
};
