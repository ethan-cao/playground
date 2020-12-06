import { createSelector } from "reselect";

import { VisibilityFilter } from "./TodosActions";
import { TodosState, Item } from "./TodosModel";

// selector function
// param is actually the entrie state, returns items:Item[]
const selectItems = (state: TodosState) => {
	return state.todos.items
};

// selector function
// param is actually the entrie state, returns visibilityFilter:VisibilityFilter
const selectVisibilityFilter = (state: TodosState) => { 
	return state.todos.visibilityFilter;
};

// result function, which is memorized with cache size of 1
// params are the results from selector()
const result = (items: Item[], filter: VisibilityFilter) => {
	console.log(items.length);
	switch (filter) {
		case VisibilityFilter.SHOW_ACTIVE:
			return items.filter((item) => !item.isDone);
		case VisibilityFilter.SHOW_COMPLETED:
			return items.filter((item) => item.isDone);
		case VisibilityFilter.SHOW_ALL:
		default:
			return items;
	}
};

// createSelector() returns a composed selector() that takes the entire application state as an argument and returns the result of result(). 
// if all selector() returns are the same (===), createSelector() returns the result that it cached from the previous time.
// if any of selector() return something different than the last time it ran. result() will be called
export const selectVisibleItems = createSelector(
	selectItems, 
	selectVisibilityFilter, 
	result
);
// composed selector VisibilityFilter is just another select(), can be used compose another selector