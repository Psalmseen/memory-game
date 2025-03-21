import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, isFlipped, onClick }) => {
  return (
    <div
      className={`relative w-16 h-16 sm:w-24 sm:h-24 cursor-pointer transition-transform duration-500 transform-style-3d  ${
        !isFlipped ? "rotate-y-180" : ""
      }`}
      onClick={onClick}
    >
      {/* Front of the card (image) */}
      <div className='absolute w-full h-full bg-white rounded-lg shadow-md flex items-center justify-center backface-hidden rotate-y-0  border-2 border-indigo-100 border-solid'>
        <Image
          src={imageUrl}
          alt='Card'
          width={96} // Adjust based on screen size
          height={96} // Adjust based on screen size
          className='rounded-lg'
        />
      </div>

      {/* Back of the card (pattern) */}
      <div className='absolute w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-md flex items-center justify-center backface-hidden rotate-y-180'>
        <div className='text-3xl sm:text-4xl text-gray-600'>?</div>
      </div>
    </div>
  );
};

export default Card;
