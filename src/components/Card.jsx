import React from "react";
import "./Card.css";

export default function Card({ card, handleChoice, flipped, cardDisabled }) {
	// destructuring props

	const handleClick = () => {
		if (!cardDisabled) {
			handleChoice(card);
		}
	};

	return (
		<div className="card">
			<div className={flipped ? "hide flex" : "flex"}>
				<div className="card-back" onClick={handleClick}></div>
				<div className="card-front">{card.name}</div>
			</div>
		</div>
	);
}
