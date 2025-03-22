import React from "react";

interface HeaderProps {
  clickCount: number;
  bestScore: number;
}

const Header: React.FC<HeaderProps> = ({ clickCount, bestScore }) => {
  return (
    <header className='bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <h1 className='text-2xl font-bold whitespace-nowrap'>
            Memory Matching Game
          </h1>
          <div className='flex flex-wrap gap-4'>
            <div className='text-lg whitespace-nowrap'>
              <span className='font-semibold'>Clicks:</span> {clickCount}
            </div>
            <div className='text-lg whitespace-nowrap'>
              <span className='font-semibold'>Best Score:</span>{" "}
              {bestScore === 0 ? "N/A" : bestScore}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
