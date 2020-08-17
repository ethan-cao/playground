import React from "react";

import { Item } from "./state/TodosModel";
import "./style/ItemList.css";

interface TodoListProps {
    items: Item[],
    remove: (id: string) => void;
    toggle: (id: string) => void;
}

export const ItemList = (props: TodoListProps) => {
    return (
        <ul className="itemList" >
            {props.items.map(item => (
                <li key={item.id} className={item.isDone ? "itemList__item--done" : "itemList__item"} >
                    <span className="itemList--item--label">{item.label}</span>
                    <button onClick={() => props.toggle(item.id)}>Toggle done</button>
                    <button onClick={() => props.remove(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
