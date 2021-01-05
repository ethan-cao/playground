import { createSelector } from "reselect";
import { TodosContainerProps } from "../TodosContainer";

import { VisibilityFilter } from "./TodosActions";
import { TodosState, Item } from "./TodosModel";


// all input selector should share the same signature, check createSelector type definition

// non-memoized selector function, input selector
// param is the entire state, returns items:Item[]
// const selectItems = (state: TodosState, props: TodosContainerProps, args1: any, args2: any) => {
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

// createSelector() returns a memoized selector, with cache size of 1
// the returned memoized selector takes the same params as input selector
// the returned memoized selector returns the result of transformer
// if all input selector returns are the same (===), transformer skips running and returns the result that it cached (the only cache)
// if any selector returns something different than the last time it ran. transformer runs again

export const selectVisibleItems = createSelector(
	selectItems, 
	selectVisibilityFilter, 
	transformer
);
// composed selector VisibilityFilter is just another select(), can be used as input selector to compose another selector