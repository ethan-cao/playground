import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Stock from "./Stock/Stock";
import { Todos } from "./Todo/Todo";
import { store } from "./AppStore";

export const App = () => {
	return (
		<Provider store={store}>  // Provider: context API 
			<BrowserRouter>
				<div className="App" >
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
		</Provider>
	);
};
