import React from "react";

import { ItemList } from "./ItemList";
import { NewItem } from "./NewItem";
import { Item } from "./state/TodosModel";

export interface TodosProps {
	items: Item[],
}

export interface TodosActions {
	add: (label: string) => void,
	remove: (id: string) => void, 
	toggle: (id: string) => void, 
	test_reselect: () => void, 
}

export const Todos = (props: TodosProps & TodosActions) => {
	const {items, add, remove, toggle, test_reselect} = props;

	return (
		<div className="Todos">
			<NewItem onAddTodo={add} test_reselect={test_reselect}></NewItem>
			<ItemList items={items} remove={remove} toggle={toggle} />
		</div>
	);
};
