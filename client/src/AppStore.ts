import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { History } from "history";
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { TodosReducer } from "./Todos/state/TodosReducer";
import { TodosState } from "./Todos/state/TodosModel";
import { AboutState } from "./About/state/AboutModel";
import { SocialWebState } from "./SocialWeb/state/SocialWebModel";
import { SocialWebReducer } from "./SocialWeb/state/SocialWebReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = 
    TodosState &
    AboutState & 
    SocialWebState;


const createRootReducer = (history: History<RootState>) => combineReducers({
    router: connectRouter(history),
    todos: TodosReducer,
    socialWeb: SocialWebReducer,
});

export const history = createBrowserHistory<RootState>();

const preloadedState = {};

export const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            ReduxThunk,
        )
    ),
);
