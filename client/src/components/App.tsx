import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todo";
import About from "./About";

const App: React.SFC = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
                <Route path={["/", "/home"]} exact component={Home} /> 
                <Route path="/todo" exact component={Todos} /> 
				{/* component wrapped by Route, Route adds info to the component's props */}
                <Route path="/about" exact component={About} /> 
			</div>
		</BrowserRouter>
	);
};

export default App;
