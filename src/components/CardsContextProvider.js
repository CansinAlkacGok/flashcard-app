import { useReducer } from 'react';
import CardsContext from "../contexts/CardsContext";

const initialCardsState = {
  cards: []
}

const cardsReducer = function(cardsState, action) {
  switch (action.type) {
    case 'addCard': {
      const newCards = [...cardsState.cards, action.card];
      return {
        cards: newCards
      }
    }
    case 'removeCard': {
      const index = action.index;
      const newCards = cardsState.cards.filter((card, i) => i !== index);
      return {
        cards: newCards
      }
    }
    default: {
      return cardsState;
    }
  }
}

function CardsContextProvider({ children }) {
  const [cardsState, cardsDispatch] = useReducer(cardsReducer, initialCardsState);
  const { cards } = cardsState;
  
  const addCard = (card) => {
    cardsDispatch({
      type: 'addCard',
      card: card
    });
  }

  const removeCard = (index) => {
    cardsDispatch({
      type: 'removeCard',
      index: index
    })
  }

    return (
        <CardsContext.Provider value={{ cards, addCard, removeCard }}>
            { children }
        </CardsContext.Provider>
    )
}

export default CardsContextProvider;