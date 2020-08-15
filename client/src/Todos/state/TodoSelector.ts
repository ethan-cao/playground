import { createSelector } from "reselect";

import { VisibilityFilter } from "./TodosActions";
import { TodosState } from "./TodosModel";

const selectItems = (state: TodosState) => state.todos.items;

const selectVisibilityFilter = (state: TodosState) => state.todos.visibilityFilter;

export const selectVisibleItems = createSelector(
    selectItems, 
    selectVisibilityFilter, 
    (items, filter) => {
	    switch (filter) {
	    	case VisibilityFilter.SHOW_ACTIVE:
	    		return items.filter(item => !item.isDone);
    		case VisibilityFilter.SHOW_COMPLETED:
    			return items.filter(item => item.isDone);
    		case VisibilityFilter.SHOW_ALL:
    		default:
    			return items;
	    }
    }
);
