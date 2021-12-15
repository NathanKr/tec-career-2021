import { Component } from "react";
import CardObj from "../logic/CardObj";
//const NUM_CARDS_IN_ROW = 2; // NUM_CARDS_IN_ROW x NUM_CARDS_IN_ROW. todo use it

class MemoryGame extends Component {
  state = {
    cards: [
      //todo consider using function constructor
      new CardObj(2, false, false),
      new CardObj(1, false, false),
      new CardObj(0, false, false),
      new CardObj(1, false, false),
      new CardObj(2, false, false),
      new CardObj(0, false, false),
    ],
    gameFinished: false,
    pairsTryCount: 0,
    elapsedSeconds: 0,
  }; // todo make random

  currentPair = []; // push index of clicked cards. max length is 2
  timerHandle = null;

  componentDidMount() {
    this.timerHandle = setInterval(() => {
      this.setState({ elapsedSeconds: this.state.elapsedSeconds + 1 });
    }, 1000);
  }

  isGameFinished = () => {
    return (
      this.state.cards.find((card) => card.pairMatched === false) === undefined
    );
  };

  cardClickHandler = (index) => {
    let newPairsTryCount = this.state.pairsTryCount;

    // --- handle card board
    const newCards = [...this.state.cards];
    const clickCard = newCards[index];

    // ---- check before change
    if (clickCard.faceUp && index === this.currentPair[0]) {
      // --- do not allow change face down if only one card is faced up
      return;
    }

    clickCard.faceUp = !clickCard.faceUp;

    // handle pairs
    if (this.currentPair.length === 0 || this.currentPair.length === 1) {
      this.currentPair.push(index);
    }

    if (this.currentPair.length === 2) {
      // --- check is pair
      const card1 = newCards[this.currentPair[0]];
      const card2 = newCards[this.currentPair[1]];
      if (card1.pair === card2.pair) {
        card1.pairMatched = true;
        card2.pairMatched = true;
      }

      if (card1.faceUp && card2.faceUp) {
        newPairsTryCount++;
      }

      this.currentPair = []; //  // get ready for new pair
    }

    if (this.isGameFinished()) {
      clearInterval(this.timerHandle);
    }

    this.setState({
      cards: newCards,
      gameFinished: this.isGameFinished(),
      pairsTryCount: newPairsTryCount,
    }); // lastly setState
  };

  render() {
    const { cards, gameFinished, pairsTryCount, elapsedSeconds } = this.state;

    // todo make matrix
    const cardElements = cards.map((card, index) => (
      <button
        disabled={card.pairMatched}
        key={index}
        onClick={() => this.cardClickHandler(index)}
      >
        {card.faceUp ? card.pair : "-"}
      </button>
    ));
    return (
      <>
        {cardElements}
        {gameFinished ? <p>Game Finished</p> : ""}
        <p>tries : {pairsTryCount}</p>
        <p>Seconds : {elapsedSeconds}</p>
      </>
    );
  }
}

export default MemoryGame;
