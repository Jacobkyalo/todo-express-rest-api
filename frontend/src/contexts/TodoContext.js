import { createContext } from "react";

const initialStates = {
    loading: false,
    error: false,
    data: [],
};

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
    return (
        <TodoContext.Provider value={initialStates}>
            {children}
        </TodoContext.Provider>
    );
};
