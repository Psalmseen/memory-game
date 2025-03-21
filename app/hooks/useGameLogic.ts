import { useEffect, useState } from "react";

interface Card {
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const useGameLogic = () => {
  // State for all cards
  const [cards, setCards] = useState<Card[]>([]);

  // State for flipped card indices
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // State for matched card indices
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  // State for click count
  const [clickCount, setClickCount] = useState(0);

  //   Initialize cards with unique image pairs
  useEffect(() => {
    const initializeCards = () => {
      const imageUrls = Array.from(
        { length: 8 },
        (_, i) => `https://picsum.photos/200?random=${i}`
      );
      const pairedImages = [...imageUrls, ...imageUrls];
      const shuffledCards = pairedImages
        .sort(() => Math.random() - 0.5)
        .map((imageUrl) => ({
          imageUrl,
          isFlipped: false,
          isMatched: false,
        }));
      setCards(shuffledCards);
    };

    initializeCards();
  }, []);

  // Handle card click
  const handleCardClick = (index: number) => {
    // Prevent flipping if:
    // 1. The card is already flipped or matched.
    // 2. Two cards are already flipped.
    if (
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedCards.length === 2
    ) {
      return;
    }

    // Flip the card
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    // Add the card to the flipped cards list
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Increment click count
    setClickCount((prev) => prev + 1);

    // Check for a match if two cards are flipped
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].imageUrl === cards[secondIndex].imageUrl) {
        // Match found
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
        setFlippedCards([]);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Reset the game
  const resetGame = () => {
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
      }))
    );
    setFlippedCards([]);
    setMatchedCards([]);
    setClickCount(0);
  };

  return {
    cards,
    matchedCards,
    clickCount,
    handleCardClick,
    resetGame,
  };
};

export default useGameLogic;
