import React, {useState} from 'react';
import TodoList from "./TodoList";
import NewTodo from './NewTodo';
import { Todo } from '../model/todo';

const Todos: React.FunctionComponent = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	
	const todoAddHandler = (text: string) => {
		setTodos( (previousTodos) => [
			...previousTodos,
			{id: Math.random().toString(), text: text}
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

export default Todos;
