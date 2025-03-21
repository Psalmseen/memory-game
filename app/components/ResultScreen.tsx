import React from "react";

interface ResultsScreenProps {
  clickCount: number;
  bestScore: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  clickCount,
  bestScore,
  onRestart,
}) => {
  const isNewBest = clickCount < bestScore;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-12 rounded-lg shadow-lg text-center'>
        <h2 className='text-2xl text-black font-bold mb-4'>Game Over !</h2>
        <p className='text-lg text-black mb-4'>Total Clicks: {clickCount}</p>
        {isNewBest && (
          <p className='text-lg mb-4 text-green-600 font-semibold'>
            New Best Score! 🎉
          </p>
        )}
        <button
          onClick={onRestart}
          className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors'
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
