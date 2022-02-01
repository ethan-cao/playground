import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { StockPanel } from "./StockPanel/StockPanel";
import { store, history } from "./AppState";
import { SocialWebContainer } from "./SocialWeb/SocialWebContainer";
import Skeleton from "./UIElement/skeleton/Skeleton";
import About from "./About/About";

// lazy loading supports only default export
const Todos = React.lazy(() => import("./Todos/TodosContainer"));  

const renderLoadingSkeleton = () => <Skeleton isLoading={true} />;

export const App = () => {
	return (
		// Provider: context API
		<Provider store={store}>
			<ConnectedRouter history={history}> {/* place ConnectedRouter under Provider */}
				<div id="app-modal-root"/>
				<div className="app">
					<Navbar />
					<React.Suspense fallback={renderLoadingSkeleton()}>  
						{/* each time, only one of the route can be matched, the 1st one */}
						<Switch>
							<Route path={["/", "/home"]} exact component={Home} />
							<Route path="/todo" exact component={Todos} />
							{/* component wrapped by Route, Route adds info to the component's props */}
							<Route path="/about" exact component={About} />
							{/* route param, :param_name */}
							<Route path="/socialWeb" component={SocialWebContainer} />
							<Route path="/stockPanel:ticker" component={StockPanel} />
						</Switch>
					</React.Suspense>
				</div>
			</ConnectedRouter>
		</Provider>
	);
};
