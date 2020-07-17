import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { TodoReducer } from "./Todo/state/TodoReducer";

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
    combineReducers({
         todo: TodoReducer
    }), 
    composeEnhancers(applyMiddleware(reduxThunk))
);
