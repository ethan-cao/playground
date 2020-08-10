import React from "react";
import { TodoList } from "./TodoList";
import { NewTodo } from "./NewTodo";

export interface Item {
    id: string,
    text: string
    isDone: false;
}

interface TodosProps {
	items: Item[]
}

interface TodosActions {
	add: () => null,
	remove: () => null, 
	toggle: () => null, 
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
			<TodoList items={items} onDeleteTodo={remove} />
		</div>
	);
};
