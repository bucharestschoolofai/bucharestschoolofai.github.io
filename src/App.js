import React from "react";
import Navigation from "./components/Navbar";
import Landing from "./components/Landing";
import Seperator from "./components/Separator";
import ImageText from "./components/ImageText";	
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
	return (
		<React.Fragment>
			<Navigation></Navigation>
			<Landing></Landing>
			<Seperator text="About"></Seperator>
			<ImageText orientation="left"></ImageText>
		</React.Fragment>
	);
}

export default App;
