import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { UserCard } from "../SocialWeb/UserCard";
import ColorFulText from "../UIElement/ColorfulText";
import { AboutState } from "./AboutModel";
import { selectAuthor } from "./AboutSlice";

const About: React.FunctionComponent<RouteComponentProps & AboutState> = (props: RouteComponentProps & AboutState) => {
		
	const author = useSelector(selectAuthor)

	const [time, setTime] = useState(() => {
		console.log('useState called');
		return Date.now();
	});

	// programmatically redirect user to a different URL after 2s
	// setTimeout(() => {
	// 	props.history.push("/home");
	// }, 2000);

	return (
		<div className="about-container">
			<h4>Author</h4>
			<UserCard name={author}/>
		</div>
	);
};

export default ColorFulText(About);

// alternatively to wrap the component in <Route>: <Route path="/about" exact component={About} />
// we can also apply high order component withRouter()
// export default withRoute(About);
