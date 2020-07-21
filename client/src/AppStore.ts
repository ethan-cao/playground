import { createStore, combineReducers, compose } from "redux";
import { TodoReducer } from "./Todo/state/TodoReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        todo: TodoReducer
    }),
    {},
    composeEnhancers(),
);
