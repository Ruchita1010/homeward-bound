import { OrbitControls } from '@react-three/drei';
import { Cavern } from './ModelComponents/Cavern';
import Player from '../../components/Player';

const Gemsoria = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      {/* default distance is infinity so restricting zoom out */}
      <OrbitControls makeDefault maxDistance={12} />
      <Cavern position={[0, -10, -100]} rotation={[0, Math.PI, 0]} />
      <Player boundary={{ x1: 80, x2: 80, z1: 100, z2: 180 }} />
    </>
  );
};

export default Gemsoria;
