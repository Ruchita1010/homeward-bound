import Flower from './modelComponents/Flower';

const FlowerField = () => {
  const ROWS = 14;
  const COLUMNS = 14;
  const startX = -12;
  const startZ = -12;

  const flowerMatrix = new Array(ROWS)
    .fill()
    .map(() => new Array(COLUMNS).fill());

  // Set positions of flowers in a grid pattern
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      const x = (i - ROWS / 2) * 1.4 + startX;
      const z = (j - COLUMNS / 2) * 1.6 + startZ;
      flowerMatrix[i][j] = (
        <Flower position={[x, 0, z]} key={`${i}-${j}`} scale={2} />
      );
    }
  }
  return (
    <>
      {flowerMatrix.map((row, i) => (
        <group key={`row-${i}`}>{row}</group>
      ))}
    </>
  );
};

export default FlowerField;
