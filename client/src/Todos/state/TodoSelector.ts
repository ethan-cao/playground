import { createSelector } from "reselect";
import { State } from "../../AppStore";
import { VisibilityFilter } from "./TodoActions";

const selectItems = (state: State) => state.todos.items;

const selectVisibilityFilter = (state: State) => state.todos.visibilityFilter;

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
