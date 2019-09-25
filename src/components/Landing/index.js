import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import bg from "../../assets/img/bg.png";

const Navigation = () => {
	return (
		<Container>
			<Row className="grid-system">
				<Col>
					<div className='landing-text'>
						<h1>
							<span style={{ color: "#FFA800" }}>Bucharest</span>
							<br />
							School of AI
						</h1>
                        <p>World-class AI education for free.</p>
						<button
							onClick={()=>window.location.href = 'https://www.facebook.com/bucharestschoolofai/'}
							className="btn btn-info normal-button"
						>
							Join now
						</button>
						&nbsp;&nbsp;&nbsp;
						<button className="btn btn-info normal-button">Learn More</button>
					</div>
				</Col>
				<Col>
					<div className="landing-illustration">
						<img src={bg} alt=""/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Navigation;
