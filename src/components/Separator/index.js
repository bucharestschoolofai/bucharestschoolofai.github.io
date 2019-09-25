import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Seperator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
	render() {
		return (
			<Container>
				<Row className="separator-grid">
					<Col>
						<hr style={{ backgroundColor: "#ff6f00", height: "0.035em" }}></hr>
					</Col>
					<Col><p style={{textAlign: "center", fontSize:"2em",margin:"0px", color:"#ff6f00"}}>{this.props.text}</p></Col>
					<Col>
						<hr style={{ backgroundColor: "#ff6f00", height: "0.035em" }}></hr>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Seperator;
