import React from "react";

interface ButtonProps {
    onClick: (event: React.MouseEvent) => void;
    label: string;
}

// export const Button = (props: ButtonProps) => {
//     console.log("Button")
//     return <button onClick={props.onClick}>{props.label}</button>;
// };

// Memoized component, re-render any props differs (any property in props)
export const Button = React.memo((props: ButtonProps) => {
    console.log("Button, memoized")
    return <button onClick={props.onClick}>{props.label}</button>;
});