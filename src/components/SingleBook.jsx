import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
	state = {
		selected: false,
	};
	render() {
		const { book } = this.props;

		return (
			<Col xs="auto">
				<Card className="h-100">
					<Card.Img
						className="img-fluid"
						variant="top"
						src={book.img}
						alt={`Copertina di ${book.title}`}
						style={{ height: "200px", objectFit: "cover" }}
					/>
					<Card.Body>
						<Card.Title>{book.title}</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
