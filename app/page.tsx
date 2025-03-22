"use client";

// import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import ResultsScreen from "./components/ResultScreen";
import useGameLogic from "./hooks/useGameLogic";
import useGameMetrics from "./hooks/useGameMetrics";

export default function Home() {
  const { bestScore, updateBestScore } = useGameMetrics();
  const { cards, matchedCards, clickCount, handleCardClick, resetGame } =
    useGameLogic(updateBestScore);

  // Update best score when the game is completed
  // useEffect(() => {
  //   if (matchedCards.length === cards.length) {
  //     updateBestScore(clickCount);
  //   }
  // }, [matchedCards, clickCount, updateBestScore]);

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header clickCount={clickCount} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
      {matchedCards.length === cards.length && clickCount !== 0 && (
        <ResultsScreen
          clickCount={clickCount}
          bestScore={bestScore}
          onRestart={resetGame}
        />
      )}
    </div>
  );
}
