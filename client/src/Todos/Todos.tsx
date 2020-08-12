import React from "react";
import { ItemList } from "./ItemList";
import { NewTodo } from "./NewTodo";

export interface Item {
    id: string,
    label: string
    isDone: false;
}

interface TodosProps {
	items: Item[]
}

interface TodosActions {
	add: (label: string) => void,
	remove: () => void, 
	toggle: () => void, 
}

export const Todos = (props: TodosProps & TodosActions) => {

	const {items, add, remove, toggle} = props;

	// const todoAddHandler = (text: string) => {
	// 	setTodos((previousTodos: Item[]) => [
	// 		...previousTodos,
	// 		{
	// 			id: Math.random() + "",
	// 			text,
	// 			isDone: false,
	// 		},
	// 	]);
	// };

	// const todoDeleteHandler = (todoId: string) => {
	// 	setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== todoId));
	// };

	return (
		<div className="Todo">
			<NewTodo onAddTodo={add}></NewTodo>
			<ItemList items={items} remove={remove} />
		</div>
	);
};
