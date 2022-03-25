import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const cardLetters = [
	{ name: "A", matched: false },
	{ name: "B", matched: false },
	{ name: "C", matched: false },
	{ name: "D", matched: false },
	{ name: "E", matched: false },
	{ name: "F", matched: false },
	{ name: "G", matched: false },
	{ name: "H", matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [attempts, setAttempts] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [cardDisabled, setCardDisabled] = useState(false);
	const [matches, setMatches] = useState(0);

	useEffect(() => {
		shuffleCards();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// comparing two selected cards
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setCardDisabled(true);
			if (choiceOne.name === choiceTwo.name) {
				setMatches((prev) => prev + 1);
				if (matches === 7) {
					alert("You have won the game!");
				}
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.name === choiceOne.name) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetChoices();
			} else {
				setTimeout(() => {
					resetChoices();
				}, 1000);
			}
		}
	}, [choiceOne, choiceTwo, matches]);

	// console.log(cards);

	// function that shuffles the cards and assigns them ids
	const shuffleCards = () => {
		if (attempts > 0) {
			alert("Are you sure you want to shuffle?");
		}
		const shuffledCards = [...cardLetters, ...cardLetters]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		// console.log("shuffledCards:", shuffledCards);
		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCards);
		setAttempts(0);
		setMatches(0);
	};

	// function to handle choice
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
		// console.log(card);
	};

	// funciton to reset choices and increase attempts
	const resetChoices = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setAttempts((prev) => prev + 1);
		setCardDisabled(false);
	};

	return (
		<div className="App">
			<div>
				<h1>Memory Game: Cards</h1>
			</div>
			<div className="stats">
				<h2>Attempts: {attempts}</h2>
				<button onClick={shuffleCards}>Reset</button>
				<h2>Matches: {matches} / 8</h2>
			</div>
			<div className="card-grid">
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						cardDisabled={cardDisabled}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
