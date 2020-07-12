import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todo";
import About from "./About";
import Stock from "./Stock/Stock";

const App: React.SFC = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				{/* each time, only one of the route can be matched, the 1st one */}
				<Switch>
					<Route path={["/", "/home"]} exact component={Home} />
					<Route path="/todo" exact component={Todos} />
					{/* component wrapped by Route, Route adds info to the component's props */}
					<Route path="/about" exact component={About} />
					{/* route param, :param_name */}
					<Route path="/stock_price_:ticker" component={Stock} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
