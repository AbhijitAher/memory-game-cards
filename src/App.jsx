import "./App.css";
import { useEffect, useState } from "react";

const cardLetters = [
	{ name: "A" },
	{ name: "B" },
	{ name: "C" },
	{ name: "D" },
	{ name: "E" },
	{ name: "F" },
	{ name: "G" },
	{ name: "H" },
];
function App() {
	const [cards, setCards] = useState([]);
	const [attempts, setAttempts] = useState(0);

	useEffect(() => {
		shuffleCards();
	}, []);

	// function that shuffles the cards and assigns them ids
	const shuffleCards = () => {
		const shuffledCards = [...cardLetters, ...cardLetters]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		console.log("shuffledCards:", shuffledCards);
		setCards(shuffledCards);
		setAttempts(0);
	};

	return (
		<div className="App">
			<h1>Memory Game: Cards</h1>
			<button onClick={shuffleCards}>Reset</button>
		</div>
	);
}

export default App;
