import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import booksHorrorData from "../data/horror.json";
import ButtonCard from "./buttonCard.jsx";
function BooksHorror() {
	const category = booksHorrorData[0].category;

	return (
		<Container id="Horror">
			<a href="#basic-nav-dropdown">
				<h2 className="my-5 pointer">{category.toUpperCase()}</h2>
			</a>{" "}
			<Row xs={1} md={2} lg={3} className="g-4">
				{booksHorrorData.map((book, idx) => (
					<Col key={"History" + idx}>
						<Card className="h-100">
							<Card.Img
								className=" img-fluid"
								variant="top"
								src={book.img}
								alt={`Copertina di ${book.title}`}
								style={{ height: "200px", objectFit: "cover" }}
							/>
							<Card.Body className="d-flex flex-column justify-content-between align-items-center">
								<Card.Title>{book.title}</Card.Title>
								<ButtonCard />
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default BooksHorror;
