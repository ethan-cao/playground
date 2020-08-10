import React, { useRef } from "react";

import "./style/NewTodo.css";

interface NewTodoProps {
    onAddTodo: (todoText: string) => void;
}

export const NewTodo = (props: NewTodoProps) => {
    // textInputRef.current refers to the corresponding DOM node, whenever that node changes
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        
        const enteredText = textInputRef.current!.value;

        props.onAddTodo(enteredText);
    };

    return (
        <form className="newTodo" onSubmit={todoSubmitHandler} >
            <div className="form-control">
                <label htmlFor="todo-test">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add TODO</button>
        </form>
    );
};
