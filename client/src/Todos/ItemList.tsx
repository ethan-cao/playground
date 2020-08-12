import React from "react";

import "./style/TodoList.css";
import { Item } from "./Todos";

interface TodoListProps {
    items: Item[],
    remove?: (id: string) => void;
}

export const ItemList = (props: TodoListProps) => {

    return (
        <ul className="todoList">
            {props.items.map(item => (
                <li key={item.id} >
                    <span>{item.label}</span>
                    {/* <button onClick={props.remove.bind(null, item.id)}>Delete</button> */}
                </li>

            ))}
        </ul>
    );
}
