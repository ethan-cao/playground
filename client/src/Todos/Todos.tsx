import React from "react";
import { useSelector } from "react-redux";
import { selectAuthor } from "../About/AboutSlice";

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


const s1 = (state: any) => {
	console.log("@@@ inline new selectAuthor");
	return state.about.author
}

export const Todos = (props: TodosProps & TodosActions) => {
	const {items, add, remove, toggle, test_reselect} = props;

	debugger
	const author = useSelector(s1)

	// const author = useSelector(selectAuthor)

	// const author = useSelector((state: any) => {
	// 	console.log("@@@ inline selectAuthor");
	// 	return state.about.author
	// })

	return (
		<div className="Todos">
			<NewItem onAddTodo={add} test_reselect={test_reselect}></NewItem>
			<ItemList items={items} remove={remove} toggle={toggle} />
			<p>author</p>
		</div>
	);
};
