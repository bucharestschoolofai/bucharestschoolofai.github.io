import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class ImageText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderText = (title, text) => {
		return (
			<>
				<h1>{title}</h1>
				<p>{text}</p>
			</>
		);
	};

	renderImage = src => {
		return <img src={src}></img>;
	};

	render() {
		if (this.props.orientation === "left") {
			return (
				<Container>
					<Row>
						<Col>{this.renderImage(this.props.src)}</Col>
						<Col>{this.renderText(this.props.title, this.props.text)}</Col>
					</Row>
				</Container>
			);
		} else {
			return (
				<Container>
					<Row>
						<Col>{this.renderText(this.props.title, this.props.text)}</Col>
						<Col>{this.renderImage(this.props.src)}</Col>
					</Row>
				</Container>
			);
		}
	}
}

export default ImageText;
