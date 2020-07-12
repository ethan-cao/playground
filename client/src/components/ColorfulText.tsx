import React, { SFC } from "react";

// High order component (HOC)
// set color for the wrapped component

const ColorFulText = (WrappedComponent: SFC<any>) => {
	const colors = ["red", "pink", "orange", "blue", "green", "yellow"];
	const randomColor = colors[Math.floor(Math.random() * 5)];
	const className = randomColor + "-text"; // materializecss classname

	return (props: any) => {
		return (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default ColorFulText;
