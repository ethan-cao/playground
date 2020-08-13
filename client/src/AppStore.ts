import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { TodoReducer } from "./Todos/state/TodoReducer";
import { Item } from "./Todos/Todos";
import { VisibilityFilter } from "./Todos/state/TodoActions";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from "history";
import { createBrowserHistory } from 'history';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = TodosState;

export interface TodosState {
    items: Item[],
    visibilityFilter: VisibilityFilter;
}

const createRootReducer = (history: History<RootState>) => combineReducers({
    router: connectRouter(history),
    todos: TodoReducer
});

export const history = createBrowserHistory<RootState>();

const preloadedState = {};

export const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
        )
    ),
);
