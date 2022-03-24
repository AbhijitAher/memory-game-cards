import React from "react";
import "./Card.css";

export default function Card({ el, handleChoice }) {
	// destructuring props

	const handleClick = () => {
		handleChoice(el);
	};

	return (
		<div className="card">
			<div className="card-back" onClick={handleClick}></div>
			<div className="card-front">{el.name}</div>
		</div>
	);
}
