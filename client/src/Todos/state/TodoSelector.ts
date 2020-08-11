import { createSelector } from "reselect";
import { RootState } from "../../AppStore";
import { VisibilityFilter } from "./TodoActions";

const selectItems = (state: RootState) => state.todos.items;

const selectVisibilityFilter = (state: RootState) => state.todos.visibilityFilter;

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
