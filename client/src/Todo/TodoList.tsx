import React from "react";

import "./style/TodoList.css";

interface TodoListProps {
    items: { id: string, text: string }[]
    onDeleteTodo: (id: string) => void;
}

export const TodoList = (props: TodoListProps) => {

    return (
        <ul className="todoList">
            {props.items.map(todo => (
                <li key={todo.id} >
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
                </li>

            ))}
        </ul>
    );
}
