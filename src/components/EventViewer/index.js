import React, { Component } from "react";
import Navigation from "../Navbar";
import Separator from "../Separator";
import ImageText from "../ImageText";

class EventViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: null,
			text: null,
			src: null
		};
	}

	findEvent = () => {
		fetch(
			"https://raw.githubusercontent.com/bucharestschoolofai/feedback/master/content.json"
		)
			.then(r => r.json())
			.then(data => {
				this.setState({
                    title: data[this.props.match.params.event].title,
                    text: data[this.props.match.params.event].text,
                    src: data[this.props.match.params.event].src
                });
			});
	};

	componentDidMount() {
        this.findEvent();
    }

	render() {
		return (
			<React.Fragment>
				<Separator text="Epoch 1 - Introduction to AI"></Separator>
				<ImageText
					orientation="left"
					title={this.state.title}
					text={this.state.text}
					src={this.state.src}
				></ImageText>
			</React.Fragment>
		);
	}
}

export default EventViewer;
