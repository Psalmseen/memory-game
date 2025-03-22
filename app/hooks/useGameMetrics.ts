import { useState, useEffect } from "react";

const useGameMetrics = () => {
  const [bestScore, setBestScore] = useState<number>(0);

  // Load bestScore from localStorage on mount
  useEffect(() => {
    const savedBestScore = localStorage.getItem("bestScore");
    if (!!savedBestScore) {
      setBestScore(parseInt(savedBestScore, 10));
    }
  }, []);

  // Function to update the best score
  const updateBestScore = (clickCount: number) => {
    if (
      clickCount < (bestScore ?? Infinity) ||
      (bestScore === 0 && clickCount > 0)
    ) {
      setBestScore(clickCount);
      localStorage.setItem("bestScore", clickCount.toString());
    }
  };

  return {
    bestScore,
    updateBestScore,
  };
};

export default useGameMetrics;
