import { useEffect, useState } from "react";
import { todoReducer } from "../utils/reducers";

const initialStates = {
    loading: false,
    error: false,
    data: [],
};

const useFetchHook = (initialUrl, httpMethod) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(todoReducer, initialStates);
    const fetchTodoData = () => {};
};

export default useFetchHook;
