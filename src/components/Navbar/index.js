import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/img/logo.png";

const Navigation = () => {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Container>
				<Navbar>
					<Navbar.Brand>
						<a href="https://bucharestschoolofai.github.io">
							<img src={logo} alt="BSoAI Logo" height={65} width={65}></img>
						</a>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<button className="btn btn-info fade-button" onClick={handleShow}>
							Contact
						</button>
					</Navbar.Collapse>
				</Navbar>
			</Container>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Coming soon :) <br />
					<br />
					{/*<button className="btn btn-info normal-button" onClick={handleClose}>
						Close
					</button>
					*/}
				</Modal.Body>
				<Modal.Footer>
					Made with &nbsp;<span style={{ color: "red" }}>&hearts;</span>&nbsp;
					by Bucharest School of AI
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Navigation;
