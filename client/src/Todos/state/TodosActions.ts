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

export interface TodoAction {
    type: string;
    id: string;
    label: string;
    filter?: VisibilityFilter
}

export const add = (label: string): TodoAction => {
    return {
        type: ADD,
        label: label,
        id: Date.now() + "",
    }
};

export const remove = (id: string) => ({
    type: REMOVE,
    id
});

export const toggle = (id: string) => ({
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
