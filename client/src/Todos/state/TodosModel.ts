import { VisibilityFilter } from "./TodosActions";

export interface TodosState {
    todos: TodosModel;
}

export interface TodosModel {
    items: Item[],
    visibilityFilter: VisibilityFilter;
}

export interface Item {
    id: string,
    label: string
    isDone: false;
}
