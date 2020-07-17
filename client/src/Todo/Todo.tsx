import React, { useState } from 'react';
import { TodoList } from "./TodoList";
import { Todo } from './model/Todo';
import { NewTodo } from './NewTodo';

export const Todos: React.FunctionComponent = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos((previousTodos: Todo[]) => [
			...previousTodos,
			{
				id: Math.random()+"",
				text,
				isDone: false,
			}
		]);
	};

	const todoDeleteHandler = (todoId: string) => {
		setTodos((previousTodos)=> previousTodos.filter(todo => todo.id !== todoId));
	};

	return (
		<div className="App" >
			<NewTodo onAddTodo={todoAddHandler}></NewTodo>
			<TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	);

}
