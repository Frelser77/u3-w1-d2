import React from "react";
import Button from "react-bootstrap/Button";

function ButtonCard() {
	return (
		<>
			<div className="d-flex flex-row aling-items-center gap-5">
				<Button variant="secondary">Add Cart</Button>
				<Button variant="success">Show info</Button>
			</div>
		</>
	);
}

export default ButtonCard;
