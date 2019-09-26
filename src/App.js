import React from "react";
import EventViewer from "./components/EventViewer";
import { Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EventOverview from "./components/EventOverview";

function App() {
	return (
		<BrowserRouter>
			<Navigation></Navigation>
			<Route exact path="/" component={EventOverview} />
			<Route path="/:event" component={EventViewer} />
		</BrowserRouter>
	);
}

export default App;
