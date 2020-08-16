import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ColorFulText from "../UIElement/ColorfulText";

const About: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => {

	// programatically redict user to a different URL after 2s
	// setTimeout(() => {
	// 	props.history.push("/home");
	// }, 2000);

	return (
		<div className="about-container">
			<h4>About</h4>
		</div>
	);
};

export default ColorFulText(About);

// alternatively to wrap the component in <Route>
//  we can also apply high order component withRouter()
// export default withRoute(About);
