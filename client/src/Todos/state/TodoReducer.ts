import * as actions from "./TodoActions";
import { TodoAction } from "./TodoActions";
import { Item } from "../Todos";

const TodoInitialState = {items: [], visibilityFilter: actions.VisibilityFilter.SHOW_ALL};

export const TodoReducer = (state = {items: []}, action: TodoAction) => {
    switch (action.type) {
            // if change it, then replace it
        case actions.ADD:
            // return [...state, { id: action.id, title: action.title, isDone: false }];
        case actions.REMOVE:
            // return state.filter((todo: Item) => todo.id !== action.id);
        case actions.TOGGLE:
            // Change data: must return a new object, only update a property does not trigger re-rendering
            // return state.map((todo: Item) => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo);
        default:
            return state;
    }
}
