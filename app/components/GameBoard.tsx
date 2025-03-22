import React from "react";
import Card from "./Card";

interface GameBoardProps {
  cards: { imageUrl: string; isFlipped: boolean }[];
  onCardClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick }) => {
  return (
    <div className='container w-max mx-auto my-4 p-2 sm:my-8 sm:p-4'>
      <div className='grid grid-cols-4 gap-3 sm:gap-4 w-full'>
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            isFlipped={card.isFlipped}
            onClick={() => onCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
