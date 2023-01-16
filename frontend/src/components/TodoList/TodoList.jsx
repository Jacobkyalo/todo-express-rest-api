import useFetchHook from "../../hooks/useFetchHook";
import { Todo } from "../Todo/Todo";

export const TodoList = () => {
    const { state } = useFetchHook("http://localhost:5000/api/todos");

    return (
        <>
            <ul>
                {state?.data.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </>
    );
};
