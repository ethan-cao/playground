import { createSelector } from "reselect";

import { VisibilityFilter } from "./TodosActions";
import { TodosState, Item } from "./TodosModel";


// all input selector should share the same signature, check createSelector type definition

// non-memoized selector function, input selector
// param is the entire state, returns items:Item[]
const selectItems = (state: TodosState) => {
	return state.todos.items
};

// non-memoized selector function, input selector
// param is actually the entire state, returns visibilityFilter:VisibilityFilter
const selectVisibilityFilter = (state: TodosState) => {
	return state.todos.visibilityFilter;
};

// params are the results from non-memoized selectors
const transformer = (items: Item[], filter: VisibilityFilter) => {
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

// createSelector(...inputSelectors, outputSelector, options?) returns memoized version of outputSelector, default cache size of 1
// all inputSelectors are called with same params, meaning all input selectors should be "signature-compatible"
// if all inputSelectors returns the same result as last time, outputSelector skips running and returns the cached result 
// if any selector returns something different than the last time it ran. outputSelector runs again

export const selectVisibleItems = createSelector(
	selectItems, 
	selectVisibilityFilter, 
	transformer
);
// composed selector VisibilityFilter is just another select(), can be used as input selector to compose another selector


// createSelector() creates a selector instance, cache is per instance