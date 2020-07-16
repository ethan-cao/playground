import { createStore, combineReducers } from "redux";
import { TodoReducer } from "./Todo/state/TodoReducer";

export const store = createStore(combineReducers({
    todos: TodoReducer
}));