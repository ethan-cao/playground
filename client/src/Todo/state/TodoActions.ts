export const ADD = "add todo";
export const REMOVE = "remove todo";
export const TOGGLE = "toggle todo";
export const UNDO = "undo";
export const REDO = "redo";
export const SET_FILTER = "set visibility filter";

export enum VisibilityFilter {
    SHOW_ALL = "SHOW_ALL",
    SHOW_COMPLETED = "SHOW_COMPLETED",
    SHOW_ACTIVE = "SHOW_ACTIVE"
}

let todoId = 0;

export interface TodoAction {
    type: string;
    id: string;
    title?: string;
    filter?: VisibilityFilter
}

export const addTodo = (todo: string) => {
    return {
        type: ADD,
        title: todo,
        id: ++todoId
    }
};

export const remove = (id: number) => ({
    type: REMOVE,
    id
});

export const toggle = (id: number) => ({
    type: TOGGLE,
    id
});

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
    type: SET_FILTER,
    filter
});

export const undo = () => ({
    type: UNDO,
});

export const redo = () => ({
    type: REDO,
});
