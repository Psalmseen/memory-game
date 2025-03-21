export async function getServerSideProps() {
  // Generate 8 unique image URLs
  const imageUrls = Array.from(
    { length: 8 },
    (_, i) => `https://picsum.photos/200?random=${i}`
  );

  // Create pairs of the image URLs
  const pairedImages = [...imageUrls, ...imageUrls];

  // Shuffle the pairs randomly
  const shuffledCards = pairedImages
    .sort(() => Math.random() - 0.5)
    .map((imageUrl) => ({
      imageUrl,
      isFlipped: false,
      isMatched: false,
    }));

  // Pass the shuffled cards as props to the page
  return {
    props: {
      initialCards: shuffledCards,
    },
  };
}
