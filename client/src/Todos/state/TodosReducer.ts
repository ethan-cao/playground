import * as actions from "./TodosActions";
import { TodoAction, VisibilityFilter } from "./TodosActions";
import { TodosModel, Item } from "./TodosModel";

const defaultTodos: TodosModel = { items: [], visibilityFilter: VisibilityFilter.SHOW_ALL };

// reducer only receives the TodoState slice
export const TodosReducer = (state: TodosModel = defaultTodos, action: TodoAction) => {
    // if change state, then replace it
    // only update a property does not trigger re-rendering
    switch (action.type) {
        case actions.ADD:
            return { ...state, items: [...state.items, { id: action.id, label: action.label, isDone: false }] };
        case actions.REMOVE:
            return { ...state, items: [...state.items.filter((todo: Item) => todo.id !== action.id)] };
        case actions.TOGGLE:
            return { ...state, items: [...state.items.map((todo: Item) => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo)] };
        default:
            return state;
    }
}
