import Flower from './ModelComponents/Flower';
import { useUUID } from '../../hooks/useUUID';

const FlowerField = ({ onAlphaFlowerClick }) => {
  const ROWS = 14;
  const COLUMNS = 14;
  const startX = -12;
  const startZ = -12;

  const flowerMatrix = new Array(ROWS)
    .fill()
    .map(() => new Array(COLUMNS).fill());

  const alphaFlowerId = Math.floor(Math.random() * 27);
  const handleFlowerClick = (e) => {
    const flowerMesh = e.object;
    const clickedFlowerId = flowerMesh.userData.id;
    if (alphaFlowerId === clickedFlowerId) {
      onAlphaFlowerClick(
        'You saved the Grovekins and as a thanks they have shared their powered with you'
      );
      return;
    }
  };

  // looping though each flower, so can't use length of flowerMatrix
  const flowerKeys = useUUID(ROWS * COLUMNS);

  // Set positions of flowers in a grid pattern
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      const x = (i - ROWS / 2) * 1.4 + startX;
      const z = (j - COLUMNS / 2) * 1.6 + startZ;
      flowerMatrix[i][j] = (
        <Flower
          // Flattens the 2D grid index into a 1D index
          key={flowerKeys[i * COLUMNS + j]}
          position={[x, 0, z]}
          scale={2}
          userData={{ id: i + j }}
          onClick={handleFlowerClick}
        />
      );
    }
  }

  // looping through each row of flowers, so we can use length of flowerMatrix
  const groupKeys = useUUID(flowerMatrix.length);

  return (
    <>
      {flowerMatrix.map((row, index) => (
        <group key={groupKeys[index]}>{row}</group>
      ))}
    </>
  );
};

export default FlowerField;
