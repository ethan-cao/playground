import { createStore, combineReducers, compose } from "redux";
import { TodoReducer } from "./Todos/state/TodoReducer";
import { Item } from "./Todos/Todos";
import { VisibilityFilter } from "./Todos/state/TodoActions";
import { connect } from "react-redux";


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface State {
    todos: {
        items: Item[],
        visibilityFilter: VisibilityFilter;
    }
}

const createRootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        todos: TodoReducer
    });
};

export const store = createStore(
    combineReducers({
    }),
    {},
    composeEnhancers(),
);
