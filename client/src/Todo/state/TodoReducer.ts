import * as actions from "./TodoActions";
import { Todo } from "../model/Todo";
import { TodoAction } from "./TodoActions";
import { TodoInitialState } from "./TodoInitialState";

export const TodoReducer = (state: Todo[] = TodoInitialState, action: TodoAction) => {
    switch (action.type) {
        case actions.ADD:
            return [...state, { id: action.id, title: action.title, isDone: false }];
        case actions.REMOVE:
            return state.filter((todo: Todo) => todo.id !== action.id);
        case actions.TOGGLE:
            // Change data: must return a new object, only update a property does not trigger re-rendering
            return state.map((todo: Todo) => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo);
        default:
            return state;
    }
}
