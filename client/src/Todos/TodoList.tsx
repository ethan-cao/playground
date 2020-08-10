import React from "react";

import "./style/TodoList.css";
import { Item } from "./Todos";

interface TodoListProps {
    items: Item[],
    onDeleteTodo?: (id: string) => void;
}

export const TodoList = (props: TodoListProps) => {

    return (
        <ul className="todoList">
            {/* {props.items.map(item => (
                <li key={item.id} >
                    <span>{item.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, item.id)}>Delete</button>
                </li>

            ))} */}
        </ul>
    );
}
