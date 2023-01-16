export const Todo = ({ todo }) => {
    return (
        <>
            <li>
                <div style={{ margin: "10px" }}>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </li>
        </>
    );
};
