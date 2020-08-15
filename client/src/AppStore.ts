import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { TodosReducer } from "./Todos/state/TodosReducer";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from "history";
import { createBrowserHistory } from 'history';
import { TodosState } from "./Todos/state/TodosModel";
import { AboutState } from "./About/state/AboutModel";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = 
    TodosState &
    AboutState;


const createRootReducer = (history: History<RootState>) => combineReducers({
    router: connectRouter(history),
    todos: TodosReducer
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
