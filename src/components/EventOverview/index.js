import React, { Component } from "react";
import Separator from "../Separator";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class EventOverview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
	}

	findEvents = () => {
		fetch(
			"https://raw.githubusercontent.com/bucharestschoolofai/feedback/master/content.json"
		)
			.then(r => r.json())
			.then(data => {
				const list = [];
				Object.keys(data).forEach(function(key) {
					list.push(data[key]);
				});
				console.log(list);
				this.setState({ events: list });
			});
	};

	componentDidMount() {
		this.findEvents();
	}

	render() {
		return (
			<>
				<Separator text="Here's a list of our events"></Separator>
				<Container>
					<Row>
						{this.state.events.map((event, idx) => {
							return (
								<Col>
									<Card style={{ width: "18em" }}>
										<Card.Img variant="top" src={event.src} />
										<Card.Body>
											<Card.Title>{event.title}</Card.Title>
											<Card.Text>
												{event.text.substring(0, 75) + " ..."}
											</Card.Text>
                                            <button className="btn btn-info normal-button">
												Feedback
											</button>
										</Card.Body>
									</Card>
								</Col>
							);
						})}
					</Row>
				</Container>
			</>
		);
	}
}

export default EventOverview;
