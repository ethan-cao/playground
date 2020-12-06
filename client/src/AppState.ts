import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { History } from "history";
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { TodosReducer } from "./Todos/state/TodosReducer";
import { TodosState } from "./Todos/state/TodosModel";
import { AboutState } from "./About/state/AboutModel";
import { SocialWebState } from "./SocialWeb/state/SocialWebModel";
import { SocialWebReducer } from "./SocialWeb/state/SocialWebReducer";
import { StockPanelState } from "./StockPanel/state/StockPanelModel";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = 
    TodosState &
    AboutState & 
    SocialWebState & 
    StockPanelState;

const preloadedState = {};


// keys (router, todos, socialWeb) in the object passed to combineReducers will define the names of the keys in the resulting state object
const createRootReducer = (history: History<RootState>) => combineReducers({
    router: connectRouter(history),
    todos: TodosReducer,
    socialWeb: SocialWebReducer,
});

export const rootEpic = combineEpics(
);

const epicMiddleware = createEpicMiddleware();


export const history = createBrowserHistory<RootState>();


export const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk,
            epicMiddleware
        )
    ),
);

epicMiddleware.run(rootEpic);