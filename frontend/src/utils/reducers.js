import { start, success, fail } from "./reducersAction";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case start:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case success:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload,
            };
        case fail:
            return {
                ...state,
                loading: false,
                error: true,
            };
    }
};
